"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  answersToUrlParam,
  scorecardQuestions,
  scoreToTier,
  urlParamToAnswers,
} from "@/lib/corpriseScore";
import type { ScorecardResult } from "@/lib/corpriseScore";

const TOTAL_QUESTIONS = scorecardQuestions.length;

/** Read answers from the `#scorecard?answers=…` hash (client only). */
const readAnswersFromHash = (): { answers: number[]; showResult: boolean } => {
  if (typeof window === "undefined") return { answers: [], showResult: false };
  const { hash } = window.location;
  const queryIdx = hash.indexOf("?");
  if (queryIdx === -1) return { answers: [], showResult: false };
  const params = new URLSearchParams(hash.slice(queryIdx + 1));
  const parsed = urlParamToAnswers(params.get("answers"));
  if (parsed.length === TOTAL_QUESTIONS) {
    return { answers: parsed, showResult: true };
  }
  return { answers: [], showResult: false };
};

const writeAnswersToHash = (answers: number[]): void => {
  if (typeof window === "undefined") return;
  const newHash = `#scorecard?answers=${answersToUrlParam(answers)}`;
  if (window.location.hash !== newHash) {
    window.history.replaceState(null, "", newHash);
  }
};

export interface UseScorecard {
  currentIndex: number;
  answers: (number | undefined)[];
  totalQuestions: number;
  isComplete: boolean;
  showResult: boolean;
  result: ScorecardResult | null;
  selectAnswer: (questionIndex: number, points: number) => void;
  goNext: () => void;
  goPrevious: () => void;
  reset: () => void;
  progressPct: number;
}

export const useScorecard = (): UseScorecard => {
  const [answers, setAnswers] = useState<(number | undefined)[]>(() =>
    Array(TOTAL_QUESTIONS).fill(undefined)
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Restore state from the URL hash once, on mount.
  useEffect(() => {
    const { answers: hashAnswers, showResult: hashShowResult } = readAnswersFromHash();
    if (hashAnswers.length === TOTAL_QUESTIONS) {
      setAnswers(hashAnswers);
      setShowResult(hashShowResult);
      setCurrentIndex(TOTAL_QUESTIONS - 1);
    }
    setHydrated(true);
  }, []);

  const completeAnswers = useMemo<number[] | null>(() => {
    const filtered: number[] = [];
    for (const a of answers) {
      if (typeof a !== "number") return null;
      filtered.push(a);
    }
    return filtered;
  }, [answers]);

  useEffect(() => {
    if (hydrated && completeAnswers) writeAnswersToHash(completeAnswers);
  }, [completeAnswers, hydrated]);

  const isComplete = completeAnswers !== null;

  const result = useMemo<ScorecardResult | null>(
    () => (completeAnswers ? scoreToTier(completeAnswers) : null),
    [completeAnswers]
  );

  const selectAnswer = useCallback((questionIndex: number, points: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = points;
      return next;
    });
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((idx) => Math.min(idx + 1, TOTAL_QUESTIONS - 1));
  }, []);

  const goPrevious = useCallback(() => {
    setCurrentIndex((idx) => Math.max(idx - 1, 0));
    setShowResult(false);
  }, []);

  const reset = useCallback(() => {
    setAnswers(Array(TOTAL_QUESTIONS).fill(undefined));
    setCurrentIndex(0);
    setShowResult(false);
    if (typeof window !== "undefined" && window.location.hash.startsWith("#scorecard")) {
      window.history.replaceState(null, "", "#scorecard");
    }
  }, []);

  // Reveal the result once every question is answered and we're on the last.
  useEffect(() => {
    if (isComplete && currentIndex === TOTAL_QUESTIONS - 1) setShowResult(true);
  }, [isComplete, currentIndex]);

  const answeredCount = answers.filter((a) => typeof a === "number").length;
  const progressPct = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  return {
    currentIndex,
    answers,
    totalQuestions: TOTAL_QUESTIONS,
    isComplete,
    showResult,
    result,
    selectAnswer,
    goNext,
    goPrevious,
    reset,
    progressPct,
  };
};

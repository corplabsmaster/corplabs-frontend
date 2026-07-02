import {
  scoreToTier,
  answersToUrlParam,
  urlParamToAnswers,
} from "../corpriseScore";

describe("scoreToTier", () => {
  it("maps 0 points to Starter", () => {
    const result = scoreToTier([0, 0, 0, 0, 0, 0, 0]);
    expect(result.totalPoints).toBe(0);
    expect(result.recommendedTier).toBe("starter");
    expect(result.tierData.price).toBe("RM 1,000");
  });

  it("maps 5 points to Starter (upper boundary)", () => {
    const result = scoreToTier([1, 1, 1, 1, 1, 0, 0]);
    expect(result.totalPoints).toBe(5);
    expect(result.recommendedTier).toBe("starter");
  });

  it("maps 6 points to Essential (lower boundary)", () => {
    const result = scoreToTier([1, 2, 0, 1, 1, 1, 0]);
    expect(result.totalPoints).toBe(6);
    expect(result.recommendedTier).toBe("essential");
  });

  it("maps 10 points to Essential (upper boundary)", () => {
    const result = scoreToTier([1, 2, 2, 1, 2, 1, 1]);
    expect(result.totalPoints).toBe(10);
    expect(result.recommendedTier).toBe("essential");
  });

  it("maps 11 points to Growth (lower boundary)", () => {
    const result = scoreToTier([1, 2, 3, 1, 2, 1, 1]);
    expect(result.totalPoints).toBe(11);
    expect(result.recommendedTier).toBe("growth");
  });

  it("maps 16 points to Growth (upper boundary)", () => {
    const result = scoreToTier([3, 4, 3, 1, 2, 2, 1]);
    expect(result.totalPoints).toBe(16);
    expect(result.recommendedTier).toBe("growth");
  });

  it("maps 17 points to Professional (lower boundary)", () => {
    const result = scoreToTier([3, 4, 4, 1, 2, 2, 1]);
    expect(result.totalPoints).toBe(17);
    expect(result.recommendedTier).toBe("professional");
  });

  it("maps 22 points to Professional (upper boundary)", () => {
    const result = scoreToTier([3, 4, 4, 3, 3, 3, 2]);
    expect(result.totalPoints).toBe(22);
    expect(result.recommendedTier).toBe("professional");
  });

  it("maps 23 points to Scale (lower boundary)", () => {
    const result = scoreToTier([5, 4, 4, 3, 2, 3, 2]);
    expect(result.totalPoints).toBe(23);
    expect(result.recommendedTier).toBe("scale");
  });

  it("maps 28 points to Scale (upper boundary)", () => {
    const result = scoreToTier([5, 6, 5, 3, 3, 3, 3]);
    expect(result.totalPoints).toBe(28);
    expect(result.recommendedTier).toBe("scale");
  });

  it("maps 29 points to Bespoke (lower boundary)", () => {
    const result = scoreToTier([5, 6, 5, 5, 3, 3, 2]);
    expect(result.totalPoints).toBe(29);
    expect(result.recommendedTier).toBe("bespoke");
  });

  it("maps maximum points (7,8,5,5,3,3,4 = 35) to Bespoke", () => {
    const result = scoreToTier([7, 8, 5, 5, 3, 3, 4]);
    expect(result.totalPoints).toBe(35);
    expect(result.recommendedTier).toBe("bespoke");
  });
});

describe("url state round-trip", () => {
  it("round-trips a 7-element answer vector", () => {
    const original = [3, 4, 5, 2, 1, 2, 1];
    const encoded = answersToUrlParam(original);
    const decoded = urlParamToAnswers(encoded);
    expect(decoded).toEqual(original);
  });

  it("handles empty / null inputs gracefully", () => {
    expect(urlParamToAnswers(null)).toEqual([]);
    expect(urlParamToAnswers(undefined)).toEqual([]);
    expect(urlParamToAnswers("")).toEqual([]);
  });

  it("ignores non-numeric chunks", () => {
    expect(urlParamToAnswers("1-2-abc-4")).toEqual([1, 2, 4]);
  });
});

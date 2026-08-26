/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

/**
 * Corpi's mark and wordmark, from the microsite's own brand assets.
 *
 * The mark is a violet speech bubble; both its body and the page it usually
 * sits on are violet, so it is always set on a white plate the way an app icon
 * is. That also sidesteps the theme entirely — the plate is --color-on-brand,
 * which is white in both themes, unlike --color-white.
 */
export function CorpiMark({ px = 36, className }: { px?: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex flex-none items-center justify-center overflow-hidden rounded-full bg-on-brand",
        className
      )}
      style={{ width: px, height: px }}
    >
      <img
        src="/corpi-mark.svg"
        alt=""
        width={Math.round(px * 0.82)}
        height={Math.round(px * 0.82)}
        className="block"
      />
    </span>
  );
}

/**
 * The wordmark, inline so the letterforms can take currentColor.
 *
 * The supplied asset draws them in #15026A, which is invisible on the dark
 * theme; the dot over the i is the one part that stays brand violet in both,
 * because it is the accent rather than the text.
 */
export function CorpiWordmark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="14 22 416 171"
      role="img"
      aria-label="Corpi"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g fill="currentColor">
        <path d="M15.9575 86.9256C15.9575 74.8148 18.7477 63.9507 24.3281 54.3334C30.0273 44.716 37.6856 37.2358 47.303 31.8928C57.0391 26.4311 67.6658 23.7002 79.1829 23.7002C92.3623 23.7002 104.057 26.9654 114.269 33.4957C124.598 39.9073 132.079 49.0497 136.709 60.923H112.309C109.104 54.3927 104.651 49.5247 98.952 46.3189C93.2528 43.1131 86.6631 41.5102 79.1829 41.5102C70.9903 41.5102 63.6882 43.3505 57.2766 47.0313C50.865 50.712 45.8189 55.9956 42.1381 62.8821C38.5761 69.7687 36.7951 77.7832 36.7951 86.9256C36.7951 96.0681 38.5761 104.083 42.1381 110.969C45.8189 117.856 50.865 123.199 57.2766 126.998C63.6882 130.679 70.9903 132.519 79.1829 132.519C86.6631 132.519 93.2528 130.916 98.952 127.71C104.651 124.505 109.104 119.637 112.309 113.106H136.709C132.079 124.98 124.598 134.122 114.269 140.534C104.057 146.945 92.3623 150.151 79.1829 150.151C67.547 150.151 56.9204 147.48 47.303 142.137C37.6856 136.675 30.0273 129.135 24.3281 119.518C18.7477 109.9 15.9575 99.0364 15.9575 86.9256Z" />
        <path d="M186.163 150.631C177.843 150.631 170.323 148.764 163.603 145.031C156.883 141.191 151.603 135.858 147.763 129.031C143.923 122.098 142.003 114.098 142.003 105.031C142.003 96.071 143.977 88.1244 147.923 81.191C151.87 74.2577 157.257 68.9244 164.083 65.191C170.91 61.4577 178.537 59.591 186.963 59.591C195.39 59.591 203.017 61.4577 209.843 65.191C216.67 68.9244 222.057 74.2577 226.003 81.191C229.95 88.1244 231.923 96.071 231.923 105.031C231.923 113.991 229.897 121.938 225.843 128.871C221.79 135.804 216.243 141.191 209.203 145.031C202.27 148.764 194.59 150.631 186.163 150.631ZM186.163 134.791C190.857 134.791 195.23 133.671 199.283 131.431C203.443 129.191 206.803 125.831 209.363 121.351C211.923 116.871 213.203 111.431 213.203 105.031C213.203 98.631 211.977 93.2444 209.523 88.871C207.07 84.391 203.817 81.031 199.763 78.791C195.71 76.551 191.337 75.431 186.643 75.431C181.95 75.431 177.577 76.551 173.523 78.791C169.577 81.031 166.43 84.391 164.083 88.871C161.737 93.2444 160.563 98.631 160.563 105.031C160.563 114.524 162.963 121.884 167.763 127.111C172.67 132.231 178.803 134.791 186.163 134.791Z" />
        <path d="M264.195 73.831C266.861 69.351 270.381 65.8844 274.755 63.431C279.235 60.871 284.515 59.591 290.595 59.591V78.471H285.955C278.808 78.471 273.368 80.2844 269.635 83.911C266.008 87.5377 264.195 93.831 264.195 102.791V149.191H245.955V61.031H264.195V73.831Z" />
        <path d="M321.601 73.991C324.694 69.9377 328.907 66.5244 334.241 63.751C339.574 60.9777 345.601 59.591 352.321 59.591C360.001 59.591 366.987 61.511 373.281 65.351C379.681 69.0844 384.694 74.3644 388.321 81.191C391.947 88.0177 393.761 95.8577 393.761 104.711C393.761 113.564 391.947 121.511 388.321 128.551C384.694 135.484 379.681 140.924 373.281 144.871C366.987 148.711 360.001 150.631 352.321 150.631C345.601 150.631 339.627 149.298 334.401 146.631C329.174 143.858 324.907 140.444 321.601 136.391V191.111H303.361V61.031H321.601V73.991ZM375.201 104.711C375.201 98.631 373.921 93.4044 371.361 89.031C368.907 84.551 365.601 81.191 361.441 78.951C357.387 76.6044 353.014 75.431 348.321 75.431C343.734 75.431 339.361 76.6044 335.201 78.951C331.147 81.2977 327.841 84.711 325.281 89.191C322.827 93.671 321.601 98.951 321.601 105.031C321.601 111.111 322.827 116.444 325.281 121.031C327.841 125.511 331.147 128.924 335.201 131.271C339.361 133.618 343.734 134.791 348.321 134.791C353.014 134.791 357.387 133.618 361.441 131.271C365.601 128.818 368.907 125.298 371.361 120.711C373.921 116.124 375.201 110.791 375.201 104.711Z" />
        <path d="M422.038 61.031V149.191H403.798V61.031H422.038Z" />
      </g>
      {/* The accent, brand violet in both themes. */}
      <path
        d="M413.1 55.5869C408.91 55.5869 405.397 54.1679 402.559 51.3299C399.721 48.492 398.302 44.9783 398.302 40.7889C398.302 36.5996 399.721 33.0859 402.559 30.248C405.397 27.41 408.91 25.991 413.1 25.991C417.154 25.991 420.6 27.41 423.438 30.248C426.276 33.0859 427.695 36.5996 427.695 40.7889C427.695 44.9783 426.276 48.492 423.438 51.3299C420.6 54.1679 417.154 55.5869 413.1 55.5869Z"
        fill="#6022F9"
      />
    </svg>
  );
}

/**
 * Mark plus wordmark, for places that introduce Corpi as a product rather than
 * as the voice in a chat window.
 */
export function CorpiLockup({
  px = 40,
  className,
  tagline,
}: {
  px?: number;
  className?: string;
  tagline?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <CorpiMark px={px} />
      <span className="flex flex-col items-start">
        {/*
          * Width as well as height. An SVG left to size itself inside a flex
          * column stretches to the column — which the tagline makes wide — and
          * then centres the glyph inside all that space.
          */}
        <CorpiWordmark
          className="block text-white"
          style={{
            height: Math.round(px * 0.5),
            width: Math.round(px * 0.5 * (416 / 171)),
          }}
        />
        {tagline && (
          <span className="mt-1.5 font-display text-[10.5px] font-medium uppercase tracking-[0.14em] text-brand-300">
            {tagline}
          </span>
        )}
      </span>
    </span>
  );
}

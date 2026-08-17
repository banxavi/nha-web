"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { useCallback, useRef, useState } from "react";

export type HoverScrollPreviewProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
  frameClassName?: string;
};

const SCROLL_PX_PER_SEC = 85;
const RETURN_MS = 1200;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Full-page screenshot preview: hover scrolls to the bottom,
 * mouse leave returns to the top (template-marketplace pattern).
 */
export function HoverScrollPreview({
  src,
  alt,
  width,
  height,
  priority,
  sizes = "(max-width: 1024px) 100vw, 45vw",
  unoptimized,
  frameClassName,
}: HoverScrollPreviewProps) {
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);
  const [offset, setOffset] = useState(0);
  const [durationMs, setDurationMs] = useState(RETURN_MS);

  const overflowPx = useCallback(() => {
    const frame = frameRef.current;
    const media = mediaRef.current;
    if (!frame || !media) return 0;
    return Math.max(0, media.offsetHeight - frame.clientHeight);
  }, []);

  const startScroll = useCallback(() => {
    hoveringRef.current = true;
    if (reduceMotion) return;
    const overflow = overflowPx();
    if (overflow <= 0) return;
    setDurationMs((overflow / SCROLL_PX_PER_SEC) * 1000);
    setOffset(overflow);
  }, [overflowPx, reduceMotion]);

  const resetScroll = useCallback(() => {
    hoveringRef.current = false;
    setDurationMs(RETURN_MS);
    setOffset(0);
  }, []);

  return (
    <div
      ref={frameRef}
      className={cx("relative overflow-hidden", frameClassName)}
      onMouseEnter={startScroll}
      onMouseLeave={resetScroll}
    >
      <div
        ref={mediaRef}
        className="will-change-transform"
        style={{
          transform: `translate3d(0, -${offset}px, 0)`,
          transition: `transform ${durationMs}ms ${offset > 0 ? "linear" : "ease-out"}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          unoptimized={unoptimized}
          onLoad={() => {
            if (hoveringRef.current) startScroll();
          }}
          className="h-auto w-full select-none"
        />
      </div>
    </div>
  );
}

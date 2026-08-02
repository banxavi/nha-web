import Image, { type ImageProps } from "next/image";

export type ZoomableImageProps = ImageProps & {
  /** Extra class on the overflow-hidden frame */
  frameClassName?: string;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Next/Image wrapper with hover + active CSS scale (ref tma.vn).
 * Parent should allow the frame size; image scales inside overflow-hidden.
 */
export function ZoomableImage({
  frameClassName,
  className,
  alt,
  ...imageProps
}: ZoomableImageProps) {
  return (
    <div className={cx("relative overflow-hidden", frameClassName)}>
      <Image
        alt={alt}
        className={cx(
          "origin-center select-none transition-transform duration-300 ease-out",
          "hover:scale-105 active:scale-110",
          className,
        )}
        {...imageProps}
      />
    </div>
  );
}

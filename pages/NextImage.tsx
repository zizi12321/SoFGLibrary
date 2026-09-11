import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageSource = string | { src: string };

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "width" | "height"> & {
  src: ImageSource;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
};

export default function Image({ src, width, height, fill, priority, style, ...props }: ImageProps) {
  const rawSource = typeof src === "string" ? src : src.src;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const resolvedSource = rawSource.startsWith("/") ? `${base}${rawSource}` : rawSource;
  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
    : style;

  return (
    <img
      {...props}
      src={resolvedSource}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : props.loading}
      style={fillStyle}
    />
  );
}

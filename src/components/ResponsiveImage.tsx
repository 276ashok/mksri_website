import React from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  // In development, Vite serves raw assets and doesn't generate .webp targets.
  // Returning a standard img tag avoids broken images caused by 404 WebP source requests.
  const isDev = import.meta.env.DEV;

  if (isDev) {
    return <img src={src} alt={alt} className={className} loading="lazy" />;
  }

  const webpSrc = src.replace(/\.(jpe?g|png)$/, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;

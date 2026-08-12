import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ src, alt, className }) => {
  const webpSrc = src.replace(/\.(jpe?g|png)$/, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;

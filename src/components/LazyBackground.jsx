// src/components/LazyBackground.jsx
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyBackground = ({ src, children, className, style, ...props }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100%',
      }}
      {...props}
    >
      <LazyLoadImage
        alt="background"
        src={src}
        className="absolute inset-0 w-full h-full object-cover object-center"
        effect="blur"
      />
      {children}
    </div>
  );
};

export default LazyBackground;

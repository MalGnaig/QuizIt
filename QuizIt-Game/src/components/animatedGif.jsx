import React from 'react';

const AnimatedGif = ({ src, alt, width = '150px', height = '150px' }) => {
  return <img src={src} alt={alt} style={{ width, height }} />;
};

export default AnimatedGif;

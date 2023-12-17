import React from 'react';

export const PhotoFrame = ({src, caption}) => {
   return (
      <div className="photoframe">
         <img src={src} alt="img"/>
         <div className="caption">{caption}</div>
      </div>
   )
}
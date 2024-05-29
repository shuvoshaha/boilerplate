import React, { ImgHTMLAttributes } from 'react'

const Image: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return (
    <img { ...props } />
  )
}

export default Image
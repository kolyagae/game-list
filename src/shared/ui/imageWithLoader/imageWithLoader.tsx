import { ImgHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import * as s from './imageWithLoader.module.css';

export const ImageWithLoader = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={s.imageWrapper} style={{ width: props.width, height: props.height }}>
      {isLoading && <div className={s.imageLoader}></div>}
      <img
        {...props}
        className={clsx(props.className, isLoading ? s.imageHidden : s.imageVisible)}
        onLoad={(e) => {
          setIsLoading(false);
          props.onLoad?.(e);
        }}
        onError={(e) => {
          setIsLoading(false);
          props.onError?.(e);
        }}
      />
    </div>
  );
};

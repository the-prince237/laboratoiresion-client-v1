'use client';

import { cn } from '@/lib/utils';
import React from 'react';

export const Video = ({
  sources,
  children,
  className,
  ...props
}: React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
  sources?: React.DetailedHTMLProps<
    React.SourceHTMLAttributes<HTMLSourceElement>,
    HTMLSourceElement
  >[];
  children?: React.ReactNode;
}) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={cn('absolute h-full w-full object-cover', className)}
      {...props}
    >
      {sources?.map((source, index) => (
        <source key={index} type='video/mp4' {...source} />
      ))}
      {children || 'video.unsupport-message'}
    </video>
  );
};
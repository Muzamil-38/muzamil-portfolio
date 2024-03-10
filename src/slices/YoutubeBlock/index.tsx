"use client";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  const { youtube_video_id, thumbnail_override } = slice.primary;
  console.log(youtube_video_id);
  return (
    <div className="w-[50%]">
      <iframe
        className="aspect-[15/9] h-full w-full p-0"
        src={`https://www.youtube.com/embed/${youtube_video_id}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default ImageBlock;

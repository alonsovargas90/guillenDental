declare module "react-photo-album" {
  import * as React from "react";

  export type Photo = {
    src: string;
    width: number;
    height: number;
    alt?: string;
    key?: string | number;
  };

  export type RenderPhotoParams = {
    photo: Photo;
    /**
     * Props that should be spread into the <img /> element
     */
    imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
    /**
     * Inline style for the wrapping div
     */
    wrapperStyle: React.CSSProperties;
    /**
     * Fallback renderer from the library (optional)
     */
    renderDefaultPhoto: (props?: any) => JSX.Element;
  };
  export type RenderPhotoProps = RenderPhotoParams;

  export interface PhotoAlbumProps {
    photos: Photo[];
    layout: "rows" | "columns" | "masonry";
    spacing?: number;
    padding?: number;
    targetRowHeight?: number;
    columns?: number;
    renderPhoto?: (props: RenderPhotoParams) => JSX.Element;
  }

  const PhotoAlbum: React.FC<PhotoAlbumProps>;

  export default PhotoAlbum;
}

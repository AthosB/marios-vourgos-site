export type GenericItemType = {
  position?: number;
  src: string;
  thumb?: string;
  preview?: string;
  alt: string;
  title?: string;
  description?: string;
  video?: boolean;
  cols?: number
  height?: number | string;
  width?: number | string;
  landscape?: boolean;
}

export type FashionItemType = {
  position?: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rating: number;
  isEditable?: boolean;
  fillingSvg?: string;
  setRating?: (rating: number) => void;
}

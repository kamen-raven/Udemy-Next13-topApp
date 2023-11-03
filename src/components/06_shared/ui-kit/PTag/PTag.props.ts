import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm';
  children: ReactNode;
}

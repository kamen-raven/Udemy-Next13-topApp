import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface InfoTag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: 'md' | 'sm';
  color?: 'transparent' | 'red' | 'green' | 'primary' | 'gray';
  href?: string;
  classNameLink?: string;
  children: ReactNode;
}

import { ReactNode, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface LinkTagProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href?: string;
  children: ReactNode;
}

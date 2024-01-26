import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 'm' | 'l';
    children: ReactNode;
    color?: 'secondary' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}
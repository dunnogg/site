import styles from './P.module.css';
import {PProps} from "@/app/components/P/P.props";
import cn from "classnames";
import Image from "next/image";
import ArrowIcon from "@/app/components/Button/Vector.svg";

export const P = ({children,size='m',className, ...props}: PProps): JSX.Element => {
    return(<p
            className={cn(styles.p,className,{
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
        })}
        {...props}
        >
            {children}
        </p>
    );
};
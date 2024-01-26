import styles from './P.module.css';
import {PProps} from "@/_components/P/P.props";
import cn from "classnames";

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
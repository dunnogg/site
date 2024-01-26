import styles from './Tag.module.css';
import {TagProps} from "@/_components/Tag/Tag.props";
import cn from "classnames";

export const Tag = ({children, size = 'm', color = 'secondary', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
                [styles.secondary]: color == 'secondary',
                [styles.red]: color == 'red',
                [styles.gray]: color == 'gray',
                [styles.green]: color == 'green',
                [styles.primary]: color == 'primary'
            })}
            {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};
import styles from './Button.module.css';
import {ButtonProps} from "@/_components/Button/Button.props";
import cn from 'classnames';
import Image from 'next/image';
export const Button = ({appearance,arrow = 'none',className,children, ...props}: ButtonProps): JSX.Element => {
    return(<button className={cn(styles.button,{
        [styles.primary]: appearance == 'primary',
        [styles.secondary]: appearance == 'secondary'
    })}
    {...props}
    >
        {children}
        {arrow !== 'none' && <span className={cn(styles.arrow, {
            [styles.down]: arrow == 'down'
        })}>
            <svg
                width={6}
                height={10}
            >
            <path d="M5.715 4.61L1.265.16A.543.543 0 00.878 0a.543.543 0 00-.386.16L.164.487a.548.548 0 000 .774L3.9 4.998.16 8.739a.543.543 0 00-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 00.387-.16l4.454-4.454a.544.544 0 00.16-.388.544.544 0 00-.16-.388z" />
        </svg>
        </span>}
    </button>
    );
};
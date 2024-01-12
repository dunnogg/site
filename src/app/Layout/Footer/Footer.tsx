import styles from './Footer.module.css';
import {FooterProps} from "./Footer.props"
import cn from "classnames";

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.Footer)} {...props}>
            <div className={styles.Copyright}>Право</div>
            <div className={styles.UserAgree}><a className={styles.a} href={'#'}>Согласие</a></div>
            <div className={styles.Conf}><a className={styles.a} href={'#'}>Лево</a></div>
        </footer>
    );
};
import styles from './Htag.module.css';
import {HtagProps} from "@/app/components/Htag/Htag.props";

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
    switch(tag) {
        case "h1":
            return (<h1 className={styles.h1}>{children}</h1>);
        case "h2":
            return (<h3 className={styles.h2}>{children}</h3>);
        case "h3":
            return (<h3 className={styles.h3}>{children}</h3>);
        default:
            return (<></>);
    }
};
import styles from './ItemCard.module.css';
import {ItemCardProps} from "@/app/components/ItemCard/ItemCard.props";
import cn from "classnames";
import Image from "next/image";
import ArrowIcon from "@/app/components/Button/Vector.svg";
import {Htag, Tag} from "@/app/components";

export const ItemCard = ({DrinkName}: ItemCardProps): JSX.Element => {
    return(<div className={styles.CardContainer}>
                <Htag tag={"h3"}>{DrinkName}</Htag>
        </div>
    );
};
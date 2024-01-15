import styles from './ItemCard.module.css';
import cn from "classnames";
import Image from "next/image";
import DrinkImage from "../../../../public/DrinkImages/DrinkImage.png";
import Link from "next/link";
import {DrinkModel} from "@/_interfaces/drink.interface";
import {Htag} from "@/app/components";
import {Tag} from "antd";

export const ItemCard: React.FC<DrinkModel> = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/drinks');
    const data: DrinkModel = await res.json();
    return (
        <div>
            {
                Array.isArray(data) ?
                    data.map((Drink: any) => (
                        <div className={styles.CardContainer}>
                            <div className={styles.CardTitle}>
                                <img className={styles.DrinkImage} alt={'Drink'} src={Drink.image}/>
                                <Htag tag={"h3"}>{Drink.title}</Htag>
                            </div>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}
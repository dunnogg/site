import styles from './ItemCard.module.css';
import {DrinkModel} from "@/_interfaces/drink.interface";
import {Htag} from "@/_components";
export const ItemCard: React.FC = async () => {
    const res = await fetch("mongodb://localhost:27017/DrinksCollection");
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
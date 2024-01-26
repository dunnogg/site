import {GetStaticProps} from 'next';
import Link from "next/link";
import styles from './Menu.module.css';

interface IMenuProps {
}
export const Menu:React.FC<IMenuProps> = async () => {
    const data = await getitems();

    return (
        <div>
            {
                Array.isArray(data)
                    ? data.map((MenuItem: any) => (
                        <Link
                            className={styles.link}
                            href={`/category/${MenuItem.categorylink}`}
                            key={MenuItem.id}
                        >
                            <h3>{MenuItem.name}</h3>
                        </Link>
                    ))
                    : null
            }
        </div>
    )
}
async function getitems() {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/items');
        return await res.json();
    } catch(e) {
        return [];
    }
}

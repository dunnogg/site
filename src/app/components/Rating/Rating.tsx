import styles from './Rating.module.css';
import {RatingProps} from "@/app/components/Rating/Rating.props";
import cn from "classnames";
import Image from 'next/image';
import {useEffect, useState, KeyboardEvent} from "react";
export const Rating = ({isEditable = false,rating,setRating,className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);
    const constructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) =>
        {
            // eslint-disable-next-line
            return ( <span className={cn(styles.star,{
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onclick(i + 1)}
                >
                <svg
                    width={20}
                    height={20}
                    fill={"#E2E2E2"}
                    tabIndex={isEditable ? 0 :-1}
                    onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handlespace(i+1, e)}
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.948 7.557a1.072 1.072 0 00-.915-.762l-5.773-.547L10.978.674A1.063 1.063 0 0010 0c-.427 0-.81.264-.977.674L6.74 6.248l-5.774.547c-.424.04-.782.34-.915.762-.131.422-.01.886.31 1.179l4.365 3.993-1.287 5.914c-.094.435.067.885.413 1.146a1.029 1.029 0 001.169.054L10 16.736l4.977 3.107c.366.227.825.206 1.17-.054.346-.261.507-.71.413-1.146l-1.287-5.914 4.365-3.993c.32-.293.441-.756.31-1.18z" />
                </svg></span>
            );
        });
        setRatingArray(updatedArray);
    };
    const changeDisplay = (i: number) => {
        if(!isEditable){
            return;
        }
        constructRating(i);
    }
    const onclick = (i: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i);
    }
    const handlespace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code != 'Space' || !setRating){
            return;
        }
        setRating(i);
    }

    return(<div {...props}>
            {ratingArray.map((r,i)=>(<span key={i}>{r}</span>))}

        </div>
    );
};
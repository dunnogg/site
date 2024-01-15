"use client";
import {Button} from "@/app/components/Button/Button";
import {Htag} from "@/app/components/Htag/Htag";
import {Tag} from "@/app/components/Tag/Tag";
import {Rating} from "@/app/components/Rating/Rating";
import React, {useEffect, useState} from "react";
import {Rate} from 'antd';
import {ItemCard} from "@/app/components/ItemCard/ItemCard";
export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [rating,setRating] = useState<number>(4);
    return (
      <div>
          <Htag tag='h1'>{counter}</Htag>
          <Button appearance="primary" arrow = 'down' onClick={() => setCounter(x => x+1)}>Кнопка</Button>
          <Button appearance="secondary" arrow = 'down'>Кнопка</Button>
          <Tag size={'m'} color = 'red'>Red</Tag>
          <Rating rating={4}/>
          <Rating rating={rating} isEditable={true} setRating={setRating}/>
          <Rate style={{ color: "#FF7C32" }}></Rate>
          <ItemCard  DrinkName={'Adrenaline Rush Zero Sugar'} />
      </div>
  )
}
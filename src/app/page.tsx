import {Button} from "@/_components/Button/Button";
import {Htag} from "@/_components/Htag/Htag";
import {Tag} from "@/_components/Tag/Tag";
import {Rate} from 'antd';
import {ItemCard} from "@/_components/ItemCard/ItemCard";
export default function Home() {
    return (
      <div>
          <Button appearance="secondary" arrow = 'down'>Кнопка</Button>
          <Tag size={'m'} color = 'red'>Red</Tag>
          <Rate style={{ color: "#FF7C32" }}></Rate>
          <ItemCard />
      </div>
  )
}
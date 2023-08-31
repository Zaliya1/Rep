import {FunctionComponent} from "react";
import {GameInfoType} from "@/types";
import { Image, Carousel } from 'antd';

const GameInfo: FunctionComponent<GameInfoType> = ({title, releaseDate, publisher, developer, genre, img, screenshots, minimumSystemRequirements}) => {
    return (
        <div className="game-info">
            <Image
                src={img}
                alt="Постер игры"
            />
            <h1>{title}</h1>
            <p>Дата релиза: {releaseDate?.split("-").reverse().join(".")}</p>
            <p>Издатель: {publisher}</p>
            <p>Разработчик: {developer}</p>
            <p>Жанр: {genre}</p>
            <p>Системные требования: </p>
            {minimumSystemRequirements && <ul>
                {Object.entries(minimumSystemRequirements)?.map(([key, value]) => (
                    <li key={key}>- {value}</li>
                ))}
            </ul>}

            <Carousel autoplay dotPosition="top">
                { screenshots?.map((screenshot) => {
                    return <Image key={screenshot.id} src={screenshot.image}/>
                })}
            </Carousel>
        </div>
    )
};

export default GameInfo;

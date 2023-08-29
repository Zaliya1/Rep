import {FunctionComponent} from "react";
import {GameInfoType} from "@/types";
import { Image, Carousel, List } from 'antd';
import "./GameInfo.css"

const GameInfo: FunctionComponent<GameInfoType> = (
    {id, title, releaseDate, publisher, developer, genre, img, screenshots, minimumSystemRequirements}
) => {
    return (
        <div className="game-info">
            <Image
                src={img}
                alt="Постер игры"
                className="game-info__img"
            />
            <h1>{title}</h1>
            <p>Дата релиза: {releaseDate.split("-").reverse().join(".")}</p>
            <p>Издатель: {publisher}</p>
            <p>Разработчик: {developer}</p>
            <p>Жанр: {genre}</p>
            <List
                className="game-info__list"
                header="Системные требования"
                size="small"
                bordered
                dataSource={Object.values(minimumSystemRequirements)}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />

            <Carousel autoplay>
                { screenshots.map((screenshot) => {
                    return <Image src={screenshot.image}/>
                })}
            </Carousel>
        </div>
    );
};

export default GameInfo;

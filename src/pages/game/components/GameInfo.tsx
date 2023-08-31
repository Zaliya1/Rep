import {FunctionComponent} from "react";
import {GameInfoType} from "@/types";
import { Image, Carousel } from 'antd';

const GameInfo: FunctionComponent<GameInfoType> = (props) => {
    if (props) {
        const  {title, releaseDate, publisher, developer, genre, img, screenshots, minimumSystemRequirements} = props;
        return (
            <div className="game-info">
                <Image
                    src={img}
                    alt="Постер игры"
                />
                <h1>{title}</h1>
                <p>Дата релиза: {releaseDate.split("-").reverse().join(".")}</p>
                <p>Издатель: {publisher}</p>
                <p>Разработчик: {developer}</p>
                <p>Жанр: {genre}</p>
                <p>Системные требования: </p>
                <ul>
                    {Object.entries(minimumSystemRequirements).map(([key, value]) => (
                        <li key={key}>- {value}</li>
                    ))}
                </ul>

                <Carousel autoplay dotPosition="top">
                    { screenshots.map((screenshot) => {
                        return <Image key={screenshot.id} src={screenshot.image}/>
                    })}
                </Carousel>
            </div>
    )} else return (<h1>Ничего не найдено</h1>)
};

export default GameInfo;

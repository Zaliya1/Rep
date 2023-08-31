import {FunctionComponent} from "react";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import "./GameItem.css"

export type GameItemProps = {
    id: string,
    title: string,
    releaseDate: string,
    publisher: string,
    genre: string,
    img: string,
}

const GameItem: FunctionComponent<GameItemProps> = ({id, title, genre, releaseDate, publisher, img}) => {
    const { Meta } = Card;
    let description = (<>
        <p className="card-description">Дата релиза: {releaseDate}</p>
        <p className="card-description">Издатель: {publisher}</p>
        <p className="card-description">Жанр: {genre}</p>
    </>)
    return (
        <li className="games-item">
            <Link to={`game/${id}`}  className="games-item__link">
                <Card
                    className="games-item__card"
                    hoverable
                    cover={<img alt="example" src={img} />}
                >
                    <Meta title={title} description={description} />
                </Card>
            </Link>
        </li>
    );
};

export default GameItem;

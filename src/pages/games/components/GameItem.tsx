import {FunctionComponent} from "react";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import {IGame} from "../../../models/IUser";
import "./GameItem.css"

interface GameItemProps extends IGame {}

const GameItem: FunctionComponent<GameItemProps> = ({id, title, genre, releaseDate, publisher, img}) => {
    const { Meta } = Card;
    let description = (<>
        <p>Дата релиза: {releaseDate}</p>
        <p>Издатель: {publisher}</p>
        <p>Жанр: {genre}</p>
    </>)
    return (
        <li className="games-item">
            <Link to={id} className="games-item__link">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={img} />}
                >
                    <Meta title={title} description={description} />
                </Card>
            </Link>
        </li>
    );
};

export default GameItem;

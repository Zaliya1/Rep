import {FunctionComponent} from "react";
import GameItem from "./GameItem";
import {IGame} from "../../../models/IUser";
import { List } from 'antd';

export type GameListProps = {
    games: IGame[];
}

const GameList: FunctionComponent<GameListProps> = ({games}) => {
    return (
    <List
        className="games-list"
        bordered
        grid={{ gutter: 3, column: 6 }}
        dataSource={games}
        renderItem={(game) => {
            let props = {
                id: game.id,
                title: game.title,
                releaseDate: game.releaseDate,
                publisher: game.publisher,
                genre: game.title,
                img: game.img
            }
            return <GameItem key={game.id} {...props} />
        }}
    />
    );
};

export default GameList;

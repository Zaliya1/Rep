import {FunctionComponent} from "react";
import GameItem from "./GameItem";
import {GameType} from "../../../types";
import { List } from 'antd';

export type GameListProps = {
    games: GameType[];
    columnCount: number;
}

const GameList: FunctionComponent<GameListProps> = ({games, columnCount}) => {
    return (
    <List
        className="games-list"
        grid={{ gutter: 30, column: columnCount }}
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

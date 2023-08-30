import {FunctionComponent} from "react";
import GameItem from "@/pages/games/components/GameItem";
import {GameType} from "@/types";
import {List} from 'antd';

export type GameListProps = {
    games: GameType[];
}

const GameList: FunctionComponent<GameListProps> = ({games}) => {
    return (
        <List
            className="games-list"
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

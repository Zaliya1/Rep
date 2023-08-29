import {FunctionComponent, useState} from "react";
import GameItem from "./GameItem";
import {GameType} from "../../../types";
import { List, Pagination } from 'antd';
import type { PaginationProps } from 'antd';

export type GameListProps = {
    games: GameType[];
    columnCount: number;
}

const GameList: FunctionComponent<GameListProps> = ({games, columnCount}) => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const paginatedGames = games.slice((current - 1) * pageSize , ((current - 1) * pageSize) + pageSize);

    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setCurrent(1);
        setPageSize(pageSize);
        console.log(paginatedGames)
    };

    return (
        <>
            <Pagination
                defaultCurrent={current}
                total={games.length}
                showSizeChanger
                onChange={onChange}
                onShowSizeChange={onShowSizeChange}
            />

            <List
                className="games-list"
                grid={{ gutter: 30, column: columnCount }}
                dataSource={paginatedGames}
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
        </>
    );
};

export default GameList;

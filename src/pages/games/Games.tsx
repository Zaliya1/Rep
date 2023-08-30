import {FunctionComponent, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect} from "react";
import {fetchGames} from "@/store/reducers/ActionCreator";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import GameList from "@/pages/games/components/GameList";
import {Pagination, PaginationProps} from "antd";
import "./Games.css"

const Games: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const {games, isLoading, error} = useAppSelector(state => state.gamesReducer)
    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    let paginatedGames = games?.slice((current - 1) * pageSize , ((current - 1) * pageSize) + pageSize);
    const propsRef = useRef(paginatedGames)
    useEffect(() => {
        propsRef.current = games?.slice((current - 1) * pageSize , ((current - 1) * pageSize) + pageSize);
    }, [current, pageSize, games]);

    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setCurrent(1);
        setPageSize(pageSize);
    };

    return (
        <div className="games">
            {!!isLoading && <Loader/>}
            {!!error && <Error description={error}/>}
            {!!games.length && <>
                <Pagination
                    className="pagination"
                    defaultCurrent={current}
                    total={games.length}
                    showSizeChanger
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                />
                <GameList games={paginatedGames} />
            </>}
        </div>
    );
};

export default Games;

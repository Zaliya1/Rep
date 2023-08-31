import {FunctionComponent, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect} from "react";
import {fetchGames} from "@/store/reducers/ActionCreator";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import GameList from "@/pages/games/components/GameList";
import {Pagination, PaginationProps, Select} from "antd";
import "./Games.css"

const Games: FunctionComponent = () => {
    // params (filters and sorting)
    const [params, setParams] = useState({
        platform: undefined,
        category: undefined,
        'sort-by': undefined,
    });
    const setPlatform = (platform: any) => {
        setParams({...params, platform});
        setCurrent(1);
    };
    const setCategory = (category: any) => {
        setParams({...params, category});
        setCurrent(1);
    };
    const setSorting = (sort: any) => {
        setParams({...params, ['sort-by']: sort});
        setCurrent(1);
    };

    // games list
    const dispatch = useAppDispatch();
    const {games, isLoading, error, genres, platforms, sorting} = useAppSelector(state => state.gamesReducer)
    useEffect(() => {
        dispatch(fetchGames(params))
    }, [dispatch, params])

    // pagination
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setPageSize(pageSize);
    };

    const paginatedGames = useMemo(() => {
        return games.slice((current - 1) * pageSize , ((current - 1) * pageSize) + pageSize);
    }, [games, current, pageSize]);

    return (
        <div className="games">
            {!!isLoading && <Loader/>}
            {!!error && !isLoading && <Error description={error}/>}
            {!!games.length && !isLoading && !error && <>
                <div className="games__settings">
                    <div className="games__filters">
                        <Select
                            className="filter-select"
                            defaultValue={params.platform || "all"}
                            onChange={setPlatform}
                            options={platforms}
                        />
                        <Select
                            className="filter-select"
                            allowClear
                            defaultValue= {params.category}
                            placeholder="Выберите фильтрацию по жанрам"
                            onChange={setCategory}
                            options={genres}
                        />
                    </div>
                    <div className="games__pagination">
                        <Select
                            className="filter-select"
                            defaultValue={params["sort-by"] || "alphabetical"}
                            onChange={setSorting}
                            options={sorting}
                        />
                        <Pagination
                            className="pagination"
                            defaultCurrent={current}
                            total={games.length}
                            showSizeChanger
                            onChange={onChange}
                            onShowSizeChange={onShowSizeChange}
                        />
                    </div>
                </div>

                <GameList games={paginatedGames} />
            </>}
        </div>
    );
};

export default Games;

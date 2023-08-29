import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchGames} from "../../store/reducers/ActionCreator";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import GameList from "./components/GameList";
import {useResize} from "@/hooks/use-resize";

const Games: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const {games, isLoading, error} = useAppSelector(state => state.gamesReducer)
    const count = useResize();
    useEffect(() => {
        dispatch(fetchGames())
    }, [dispatch])

    return (
        <main>
            {!!isLoading && <Loader/>}
            {!!error && <Error description={error}/>}
            {!!games.length && <GameList games={games} columnCount={count} />}
        </main>
    );
};

export default Games;

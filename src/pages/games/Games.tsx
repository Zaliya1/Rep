import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchUsers} from "../../store/reducers/ActionCreator";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import GameList from "./components/GameList";

const Games: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const {games, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            GAMES
            {isLoading && <Loader/>}
            {error && <Error description={error}/>}
            <GameList games={games} />
        </>
    );
};

export default Games;

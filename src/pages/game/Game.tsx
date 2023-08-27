import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchGame} from "../../store/reducers/ActionCreator";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const Game: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    const {game, isLoading, error} = useAppSelector(state => state.gameReducer)
    useEffect(() => {
        dispatch(fetchGame())
    }, [])

    return (
        <>
            GAMES
            {isLoading && <Loader/>}
            {error && <Error description={error}/>}
            <p>{game.title}</p>
        </>
    );
};

export default Game;

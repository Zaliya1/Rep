import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {useEffect} from "react";
import {fetchGame} from "../../store/reducers/ActionCreator";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import storage from 'redux-persist/lib/storage'
import {useParams} from "react-router-dom";
import {gameSlice} from "../../store/reducers/GameSlice";

const Game: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { setGame } = gameSlice.actions

    storage.getItem('persist:root').then((res) => {
        if (typeof res === "string") {
            let obj = JSON.parse(res);
            setGame(JSON.parse(obj.gameReducer).game);
        }
    })

    const { id } = useParams()
    const { game, isLoading, error } = useAppSelector(state => state.gameReducer)
    useEffect(() => {
        if (id && game && game.id !== id) {
            dispatch(fetchGame(id))
        }
    }, [dispatch, id, game])

    return (
        <>
            GAME
            {isLoading && <Loader/>}
            {error && <Error description={error}/>}
            {game && <p>{game.title}</p>}
        </>
    );
};

export default Game;

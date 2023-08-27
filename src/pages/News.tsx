import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useEffect} from "react";
import {fetchGames} from "../store/reducers/ActionCreator";

export type NewsProps = {
    message?: string;
}

const News: FunctionComponent<NewsProps> = ({message}) => {
    const dispatch = useAppDispatch();
    const {games, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchGames())
    }, [])
    console.log(games)
    return (
        <>
            NEWS
            {isLoading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(games, null, 2)}
        </>
    );
};

export default News;

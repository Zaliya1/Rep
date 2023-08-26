import {FunctionComponent} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {useEffect} from "react";
import {fetchUsers} from "../store/reducers/ActionCreator";

export type NewsProps = {
    message?: string;
}

const News: FunctionComponent<NewsProps> = ({message}) => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <>
            NEWS
            {isLoading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </>
    );
};

export default News;

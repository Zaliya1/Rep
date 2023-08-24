import {FunctionComponent} from "react";
import { Link } from 'react-router-dom';

export type PageNotFoundProps = {
    message?: string;
}

const PageNotFound: FunctionComponent<PageNotFoundProps> = ({message}) => {
    return (
        <>
            {!!message ? <p>{message}</p> : <p>Страница не найдена</p>}
            <p>Вернуться на <Link to="/">Главную</Link></p>
        </>
    );
};

export default PageNotFound;

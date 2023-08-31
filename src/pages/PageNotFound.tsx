import {FunctionComponent} from "react";
import { Link } from 'react-router-dom';

export type PageNotFoundProps = {
    message?: string;
}

const PageNotFound: FunctionComponent<PageNotFoundProps> = ({message= "Страница не найдена или находится в разработке"}) => {
    return (
        <>
            <p>{message}</p>
            <p>Вернуться на <Link to="/">Главную</Link></p>
        </>
    );
};

export default PageNotFound;

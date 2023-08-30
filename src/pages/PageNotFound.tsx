import {FunctionComponent} from "react";
import { Link } from 'react-router-dom';
import {Button} from "antd";
import {LeftOutlined} from "@ant-design/icons";

export type PageNotFoundProps = {
    message?: string;
}

const PageNotFound: FunctionComponent<PageNotFoundProps> = ({message}) => {
    return (
        <>
            {!!message ? <p>{message}</p> : <p>Страница не найдена</p>}
            <Link to="/"><Button type="primary" ghost icon={<LeftOutlined />} className="game__button">Вернуться на главную</Button></Link>
        </>
    );
};

export default PageNotFound;

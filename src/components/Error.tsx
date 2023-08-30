import {FunctionComponent} from "react";
import { Alert } from 'antd';

export type ErrorProps = {
    message?: String,
    description: String,
}

const Error: FunctionComponent<ErrorProps> = ({message = 'Ошибка сервера', description}) => {
    return (
        <Alert
            message={message}
            description={description}
            type="error"
            showIcon
            className="error"
        />
    );
};

export default Error;

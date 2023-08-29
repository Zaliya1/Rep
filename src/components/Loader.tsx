import {FunctionComponent} from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import "./Loader.css"

const Loader: FunctionComponent = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;
    return (
        <Spin indicator={antIcon} className="loader" size="large" />
    );
};

export default Loader;

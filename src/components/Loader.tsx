import {FunctionComponent} from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader: FunctionComponent = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    return (
        <Spin indicator={antIcon} className="loader"/>
    );
};

export default Loader;

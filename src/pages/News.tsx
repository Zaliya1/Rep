import {FunctionComponent} from "react";

export type NewsProps = {
    message?: string;
}

const News: FunctionComponent<NewsProps> = ({message}) => {
    return (
        <>
            NEWS
        </>
    );
};

export default News;

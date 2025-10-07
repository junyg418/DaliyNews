import styled from "styled-components";
import {Row} from "../../styles/layout";

import KeywordNews from './KeywordNews'
import EmptyKeywordNews from "./EmptyKeywordNews";


const LayoutKeywordNewsList = styled(Row)`
    height: 30%;
    justify-content: space-between;
`;

function KeywordNewsList() {
    // content 는 4개까지만 허용하기로 하자.
    return (
        <LayoutKeywordNewsList>
            <KeywordNews keyword={"samsung"} description={"설명입니다요"}/>
            <KeywordNews keyword={"samsung"} description={"설명입니다요"}/>
            <EmptyKeywordNews/>
            <KeywordNews keyword={"samsung"} description={"설명입니다요"}/>
        </LayoutKeywordNewsList>
    );
}

export default KeywordNewsList;
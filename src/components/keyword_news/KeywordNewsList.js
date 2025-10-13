import styled from "styled-components";
import {Row} from "../../styles/layout";

import {KeywordNews, EmptyKeywordNews} from './KeywordNews'


const LayoutKeywordNewsList = styled(Row)`
    height: 30%;
    justify-content: space-around;
`;

function KeywordNewsList() {
    // content 는 4개까지만 허용하기로 하자.
    return (
        <LayoutKeywordNewsList>
            <KeywordNews keyword={"samsung"} description={"설명입니다요"}/>
            <KeywordNews keyword={"samsung"} description={"설명입니다요"}/>
            {/*<KeywordNews keyword={"samsung"} description={"설명입니다요"}/>*/}
            {/*<KeywordNews keyword={"samsung"} description={"설명입니다요"}/>*/}
            <EmptyKeywordNews/>
            <EmptyKeywordNews/>
        </LayoutKeywordNewsList>
    );
}

export default KeywordNewsList;
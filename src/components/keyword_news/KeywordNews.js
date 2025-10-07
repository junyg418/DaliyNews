import {DefaultBorder, Column} from "../../styles/layout";
import styled from "styled-components";


const LayoutKeywordNews = styled(DefaultBorder)`
    width: 24%;
`;

function KeywordNews({keyword, description}) {
    // keyword 는 8글자 까지만 가능하게 해야한다.
    // 제공 데이터 쿼리는 : https://news.google.com/search?q=${keyword} when:1d
    return (
        <LayoutKeywordNews>
            <Column>
                <a href={`https://news.google.com/search?q=${keyword}`}
                   style={{flex:0, fontSize: "23px", fontWeight: "bold"}}>
                    {keyword}
                </a>
                <hr/>
                <div style={{flex:1}}>{description}</div>
            </Column>
        </LayoutKeywordNews>
    )
}

export default KeywordNews;
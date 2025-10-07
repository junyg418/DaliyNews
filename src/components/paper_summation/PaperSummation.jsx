import styled from "styled-components";
import {Column, Row, DefaultBorder} from "../../styles/layout.js"

import { Bookmark } from "./Bookmark.js"

const LayoutPaperSummation = styled(DefaultBorder)`
    height: 10%
`;


function PaperSummation({title, description, paper_link, is_booked}) {
    return (
        <LayoutPaperSummation>
            <Row>
                <Column style={{flex:1, minWidth: 150}}>
                    <a href={paper_link} style={{fontSize: "25px", fontWeight: "bold"}}>{description}</a>
                    <div>{title}</div>
                </Column>
                <Column style={{flex:0, minWidth: 50}}>
                    <Bookmark is_booked={is_booked} onclick={()=>{}} />
                </Column>
            </Row>
        </LayoutPaperSummation>
    )
}

export default PaperSummation;
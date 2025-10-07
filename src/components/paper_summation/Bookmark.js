import styled from "styled-components";
import {Column} from "../../styles/layout";
import {BookmarkAdd, BookmarkCheck, BookmarkDefault, BookmarkDelete} from "../../assets/bookmark";


const StyledColumn = styled(Column)`
    position: relative;
    cursor: pointer;

    /* 모든 SVG 기본 설정 */
    svg {
        position: absolute; /* 겹치기 위해 절대 위치 */
        top: 7px;
        left: 0;
        transition: opacity 0.2s ease; /* fade 효과 */
    }

    .default {
        opacity: 1; /* 기본 아이콘 보임 */
    }

    .hover {
        opacity: 0; /* hover 아이콘 숨김 */
    }

    &:hover .default {
        opacity: 0; /* hover 시 기본 아이콘 사라짐 */
    }

    &:hover .hover {
        opacity: 1; /* hover 아이콘 나타남 */
    }

`;

export const Bookmark = ({ is_booked, onClick }) => {
    return (
        <StyledColumn onClick={onClick}>
            {is_booked ? (
                <>
                    <BookmarkDefault className="default" />
                    <BookmarkDelete className="hover" />
                </>
            ) : (
                <>
                    <BookmarkAdd className="default" />
                    <BookmarkCheck className="hover" />
                </>
            )}
        </StyledColumn>
    );
};
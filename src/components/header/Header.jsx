import {Row} from "../../styles/layout"
import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/logo.svg";

const StyledMainHeader = styled(Row)`
    align-items: flex-start;
    padding: 1%;
    gap: 1%;
`;

function MainHeader() {
    // Event event, Alarm alerm 추가 해야한다.
    return (
        <StyledMainHeader>
            <Logo width={200}/>
            <div style={{backgroundColor: "green"}}>
                오늘, 내일 날시 알려주거나 | 컨퍼런스 와 행사 일정 돌아가며 계속해서 보여줌 두 기능 고민 해봐야겠다.
            </div>
            <div style={{backgroundColor: "red"}}>
                bookmark
            </div>
            <div style={{backgroundColor: "blue"}}>
                alarm
            </div>
        </StyledMainHeader>
    );
}

export default MainHeader;
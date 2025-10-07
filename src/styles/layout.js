import styled from "styled-components";

export const DefaultBorder = styled.div`
    border: #00141c solid 2px;
    border-radius: 6px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    transition: transform 0.1s ease;

    &:hover {
        transform: scale(1.01);
        border: #00141c solid 3px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;
import styled from "styled-components";
import {SearchAlt} from "@styled-icons/boxicons-regular/SearchAlt"

export const HeaderContainer = styled.header`

`;

export const LeftSec = styled.div`

`;

export const MidSec = styled.div`
    position: relative;
`;

export const RightSec = styled.div`

`;

export const Logo = styled.img`
    width: 120px;
`;

export const SearchInput = styled.input`
    font-size: 1em;
    width: 300px;
    height: 50px;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: #323842;
    color: #fff;
    padding: 0px 10px;
`;

export const SearchIcon = styled(SearchAlt)`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: #323842;
    color: #fff;
    border-radius: 0px 7px 7px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    fill: #fff;
`;
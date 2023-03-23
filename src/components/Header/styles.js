import styled from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
import { Cart } from '@styled-icons/boxicons-solid/Cart';
import { CloseCircleOutline } from "@styled-icons/evaicons-outline/CloseCircleOutline";
import { ArrowBackOutline } from "@styled-icons/evaicons-outline/ArrowBackOutline";

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: #101317;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 999;
`;

export const LeftSec = styled.div`
    display: flex;
    align-items: center;
`;

export const MidSec = styled.div`
    position: relative;
`;

export const RightSec = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 70px;
    width: 70px;
    object-fit: contain;
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
    padding: 0 50px;
    transition: all 0.3s ease-in-out;
    &:focus{
        width: 400px;
    }

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

export const SearchIcon = styled(SearchAlt)`
    position: absolute;
    top: 8px;
    left: 4px;
    width: 35px;
    height: 35px;
    color: #fff;
    border-radius: 0px 7px 7px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`;

export const NavItem = styled.li`
    margin: 0 10px;

    &:nth-child(1) > a {
        border: 1px solid #fff;
        padding: 10px
    }

    &:nth-child(1) > a:hover {
        background-color: #f2f2f2;
        color: #101317;
    }

    &:nth-child(2) > a {
        border: 1px solid transparent;
        padding: 10px;
        background-color: #f2f2f2;
        color: #101317;
    }
`;

export const NavItemLink = styled.a`
    box-sizing: border-box;
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;

export const CartIcon = styled(Cart)`
    width: 35px;
    height: 35px;
    color: #fff;
    cursor: pointer;
`;

export const CartCount = styled.span`
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: #f2f2f2;
    color: #101317;
    font-size: 0.8em;
    font-weight: 600;
    padding: 0 5px;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
`;

export const CartBar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 450px;
    height: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.5);
    z-index: 999;
    user-select: none;
`;

export const CartBarHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const CartBarTitle = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
`;

export const CartBarClose = styled(ArrowBackOutline)`
    width: 35px;
    height: 35px;
    color: #101317;
    cursor: pointer;
`;

export const CartBarBody = styled.div`
    height: 90%;
    overflow-y: auto;
`;

export const CartBarFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CartBarTotal = styled.h2`
    font-size: 1em;
    font-weight: 600;
`;

export const CartBarCheckout = styled.button`
    font-size: 1em;
    font-weight: 600;
    padding: 10px 20px;
    border: none;
    outline: none;
    background-color: #101317;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #323842;
    }
`;

export const CartBarEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const CartBarEmptyText = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
`;

export const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const CartItemImg = styled.img`
    height: 100px;
    width: 100px;
    object-fit: contain;
`;

export const CartItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
`;

export const CartItemName = styled.h2`
    font-size: 1.2em;
    font-weight: 600;
`;

export const CartItemPrice = styled.h2`
    font-size: 1.2em;
    font-weight: 600;
`;

export const CartItemDelete = styled(CloseCircleOutline)`
    width: 35px;
    height: 35px;
    color: #101317;
    cursor: pointer;
`;

export const CartItemQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
`;

export const CartItemQuantityBtn = styled.button`
    font-size: 1.2em;
    font-weight: 600;
    padding: 5px 10px;
    border: none;
    outline: none;
    background-color: #101317;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #323842;
    }
`;

export const CartItemQuantityCount = styled.span`
    font-size: 1.2em;
    font-weight: 600;
`;
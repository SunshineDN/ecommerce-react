import styled from "styled-components";
import { Cart } from '@styled-icons/boxicons-solid/Cart';

export const ProductsContainer = styled.div`
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 20px;
    gap: 10px;
    margin-top: 100px;
`;

export const ProductCard = styled.div`
    width: 300px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: contain;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ProductTitle = styled.h2`
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const ProductDesc = styled.p`
    font-size: 0.9em;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: justify;
`;

export const ProductPrice = styled.p`
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 10px
`;

export const ProductButton = styled.button`
    width: 100%;
    height: 40px;
    color: #fff;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    font-size: 1.2em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-position: center right;
    }
    &:active {
        transform: scale(0.99);
    }
`;

export const ProductButtonLink = styled.a`
    width: 100%;
    height: 40px;
    background: rgb(247,167,80);
    background: linear-gradient(145deg, rgba(247,167,80,1) 0%, rgba(51,15,228,1) 100%);
    background-size: 150%;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: .7em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-position: center right;
    }
    &:active {
        transform: scale(0.95);
    }
`;

export const ProductButtonLinkIcon = styled(Cart)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;

export const ProductButtonLinkText = styled.span`
    font-size: 1.2em;
    font-weight: 600;
`;

export const ProductButtonLinkTextCart = styled.span`
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 10px;
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;
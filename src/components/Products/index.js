import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { currencyAPI, productAPI } from "../../services/api";
import { ProductsContainer, ProductCard, ProductButton, ProductButtonLink, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductTitle, ProductButtonLinkIcon, ProductButtonLinkTextCart, Loading, } from "./styles";

function Products({onAddProductToCart}) {
    const [products, setProducts] = useState([]);
    const [usd, setUsd] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        currencyAPI.get("/json/last/USD-BRL")
            .then(res => res.data)
            .then(data => {
                setUsd(data.USDBRL.bid);
            })
    }, [])

    useEffect(() => {
        productAPI.get("/products")
            .then(res => res.data)
            .then(data => {
                data.map(product => {
                    product.price = product.price * usd;
                    product.quantity = 1;
                    return product;
                })

                setProducts(data);
            })
    }, [usd])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, [])


    function handleAddProductToCart(product) {
        onAddProductToCart(product);
    }

    return (
        <ProductsContainer>
            {loading ? 
            <Loading>
                <HashLoader
                color="#fff"
                size={70}
                />
            </Loading>
            :
            products.map(product => (
                <ProductCard key={product.id}>
                    <ProductImg src={product.image} alt={product.title} />
                    <ProductInfo>
                        <ProductTitle>{product.title}</ProductTitle>
                        <ProductDesc>{product.description}</ProductDesc>
                        <ProductPrice>R$ {product.price.toFixed(2).split(".").join(",")}</ProductPrice>
                    </ProductInfo>
                    <ProductButton>
                        <ProductButtonLink onClick={e => handleAddProductToCart(product)}>
                            <ProductButtonLinkIcon />
                            <ProductButtonLinkTextCart>Adicionar ao carrinho</ProductButtonLinkTextCart>
                        </ProductButtonLink>
                    </ProductButton>
                </ProductCard>
            ))}
        </ProductsContainer>
    )
}

export default Products;
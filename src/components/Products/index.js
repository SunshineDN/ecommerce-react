import { useEffect, useState } from "react";
import { ProductsContainer, ProductCard, ProductButton, ProductButtonLink, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductTitle, ProductButtonLinkIcon, ProductButtonLinkTextCart, } from "./styles";

function Products({onAddProductToCart}) {
    const [products, setProducts] = useState([]);
    const [usd, setUsd] = useState(0);

    useEffect(() => {
        fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
            .then(res => res.json())
            .then(data => {
                setUsd(data.USDBRL.bid);
            })
    }, [])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                data.map(product => {
                    product.price = product.price * usd;
                    product.quantity = 1;
                    return product;
                })

                setProducts(data);
            })
    }, [usd])

    function handleAddProductToCart(product) {
        onAddProductToCart(product);
    }

    return (
        <ProductsContainer>
            {products.map(product => (
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
import { useEffect, useState } from "react";
import { ProductsContainer, ProductCard, ProductButton, ProductButtonLink, ProductDesc, ProductImg, ProductInfo, ProductPrice, ProductTitle, ProductButtonLinkIcon, ProductButtonLinkTextCart, } from "./styles";

function Products({onAddProductToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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
                        <ProductPrice>R$ {product.price}</ProductPrice>
                    </ProductInfo>
                    <ProductButton>
                        <ProductButtonLink onClick={e => handleAddProductToCart(product)} to={`/product/${product.id}`}>
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
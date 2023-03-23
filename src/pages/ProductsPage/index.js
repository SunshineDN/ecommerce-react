import Products from "../../components/Products";
import { Body } from "./styles";

function ProductsPage({ onAddProductToCart }) {
    return (
        <Body>
            <Products onAddProductToCart={onAddProductToCart} />
        </Body>
    )
}

export default ProductsPage;
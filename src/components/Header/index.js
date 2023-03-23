import { CartCount,
    CartIcon,
    HeaderContainer,
    LeftSec,
    Logo,
    MidSec,
    Nav,
    NavItem,
    NavItemLink,
    NavList,
    RightSec, 
    SearchIcon,
    SearchInput,
    CartBar,
    CartBarBody,
    CartBarCheckout,
    CartBarClose,
    CartBarEmpty,
    CartBarEmptyText,
    CartBarFooter,
    CartBarHeader,
    CartBarTitle,
    CartBarTotal,
    CartItem,
    CartItemDelete,
    CartItemImg,
    CartItemInfo,
    CartItemName,
    CartItemPrice,
    CartItemQuantity,
    // CartItemQuantityBtn,
    CartItemQuantityCount, 
    CartItemAddQuantityBtn,
    CartItemRemoveQuantityBtn} from "./styles"
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";

function Header({ cartList, removeProductFromCart, clearCart, addQuantity, subtractQuantity}) {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const total = (
        cart.reduce((count, product) => {
            return count += (product.price * product.quantity);
        }, 0)
    );

    useEffect(() => {
        setCart(cartList);
    }, [cartList]);

    function handleRemoveProductFromCart(productId) {
        removeProductFromCart(productId);
    };

    function handleClearCart() {
        clearCart();
    };

    function handleSubtractQuantity(productId) {
        subtractQuantity(productId);
    };

    function handleAddQuantity(productId) {
        addQuantity(productId);
    };

    return(
        <HeaderContainer>
            <LeftSec>
                <Logo src={logo}/>
            </LeftSec>
            <MidSec>
                <SearchInput placeholder="Buscar"/>
                <SearchIcon />
            </MidSec>
            <RightSec>
                <Nav>
                    <NavList>
                        <NavItem>
                            <NavItemLink to="/login">Login</NavItemLink>
                        </NavItem>
                        <NavItem>
                            <NavItemLink to="/register">Cadastrar</NavItemLink>
                        </NavItem>
                        <NavItem>
                            <NavItemLink style={{position: "relative"}} onClick={e => setIsOpen(true)} ><CartIcon/><CartCount>{cart.reduce((count, product) => {return count += product.quantity}, 0) }</CartCount> </NavItemLink>
                        </NavItem>
                    </NavList>
                </Nav>
            </RightSec>
            {isOpen && (<CartBar>
                <CartBarHeader>
                    <CartBarTitle>Meu Carrinho</CartBarTitle>
                    <CartBarClose onClick={e => setIsOpen(false)} />
                </CartBarHeader>
                <CartBarBody>
                    {cart.length === 0 ? (
                        <CartBarEmpty>
                            <CartBarEmptyText>Seu carrinho está vazio</CartBarEmptyText>
                        </CartBarEmpty>
                    ) : (
                        cart.map(product => (
                            <CartItem key={product.id}>
                                <CartItemImg src={product.images[0]} />
                                <CartItemInfo>
                                    <CartItemName>{product.title}</CartItemName>
                                    <CartItemPrice>R$ {product.price.toFixed(2).split(".").join(",")}</CartItemPrice>
                                    <CartItemQuantity>
                                        <CartItemRemoveQuantityBtn onClick={e => handleSubtractQuantity(product.id)} />
                                        <CartItemQuantityCount>{product.quantity}</CartItemQuantityCount>
                                        <CartItemAddQuantityBtn onClick={e => handleAddQuantity(product.id)} />
                                    </CartItemQuantity>
                                </CartItemInfo>
                                <CartItemDelete onClick={e => handleRemoveProductFromCart(product.id)} />
                            </CartItem>
                        ))
                    )}
                </CartBarBody>
                <CartBarFooter>
                    <CartBarTotal>Total: R$ {total.toFixed(2).split(".").join(",")}</CartBarTotal>
                    <CartBarCheckout>Finalizar compra</CartBarCheckout>
                    {cart.length > 0 && <CartBarCheckout onClick={e => handleClearCart()}>Limpar</CartBarCheckout>}
                </CartBarFooter>
            </CartBar>)}
        </HeaderContainer>
    )
}

export default Header;
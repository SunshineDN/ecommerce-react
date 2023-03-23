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
    CartItemQuantityBtn,
    CartItemQuantityCount } from "./styles"
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";

function Header({ cartList, removeProductFromCart, clearCart}) {
    const [cart, setCart] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const total = (
        cart.reduce((count, product) => {
            return count += product.price;
        }, 0)
    )

    useEffect(() => {
        setCart(cartList);
    }, [cartList])

    function handleRemoveProductFromCart(productId) {
        removeProductFromCart(productId);
    }

    function handleClearCart() {
        clearCart();
    }

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
                            <NavItemLink style={{position: "relative"}} onClick={e => setIsOpen(true)} ><CartIcon/><CartCount>{cart.length}</CartCount> </NavItemLink>
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
                                <CartItemImg src={product.image} />
                                <CartItemInfo>
                                    <CartItemName>{product.name}</CartItemName>
                                    <CartItemPrice>R$ {product.price}</CartItemPrice>
                                    <CartItemQuantity>
                                        <CartItemQuantityBtn>-</CartItemQuantityBtn>
                                        <CartItemQuantityCount>1</CartItemQuantityCount>
                                        <CartItemQuantityBtn>+</CartItemQuantityBtn>
                                    </CartItemQuantity>
                                </CartItemInfo>
                                <CartItemDelete onClick={e => handleRemoveProductFromCart(product.id)} />
                            </CartItem>
                        ))
                    )}
                </CartBarBody>
                <CartBarFooter>
                    <CartBarTotal>Total: R$ {total.toFixed(2)}</CartBarTotal>
                    <CartBarCheckout>Finalizar compra</CartBarCheckout>
                    {cart.length > 0 && <CartBarCheckout onClick={e => handleClearCart()}>Limpar</CartBarCheckout>}
                </CartBarFooter>
            </CartBar>)}
        </HeaderContainer>
    )
}

export default Header;
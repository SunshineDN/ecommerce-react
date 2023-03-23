import { HeaderContainer, LeftSec, Logo, MidSec, RightSec, SearchIcon, SearchInput } from "./styles"
import logo from "../../assets/logo.png"

function Header() {
    return(
        <HeaderContainer>
            <LeftSec>
                <Logo src={logo}/>
            </LeftSec>
            <MidSec>
                <SearchInput placeholder="Buscar"><SearchIcon /> </SearchInput>
            </MidSec>
            <RightSec>

            </RightSec>
        </HeaderContainer>
    )
}

export default Header;
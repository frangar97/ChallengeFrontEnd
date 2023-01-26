import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import routes from '../routes';

const NavBar = () => {
    return (
        <Navbar dark color='dark'>
            <NavbarBrand href="/">Challenge</NavbarBrand>
            <Nav>
                {routes.map(({ name, path }) => (
                    <NavItem key={name}>
                        <NavLink style={{ color: "white", marginRight: 5, textDecoration: "none" }} to={path}>{name}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Navbar>
    )
}

export default NavBar;
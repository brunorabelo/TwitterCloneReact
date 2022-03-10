import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "shards-react";
import AuthContext from "../../context/AuthContext";

export default function NavBarComponent(props) {
    const user = useContext(AuthContext)
    const navigate = useNavigate()
    const goHome = function () {
        navigate('/')
    }
    const goFollowers = function () {
        navigate('/followers')
    }

    return <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand>sd</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink style={{cursor: 'pointer'}} onClick={goHome}>
                    Home
                </NavLink>
            </NavItem>
            {user ? <NavItem>
                <NavLink active onClick={goFollowers}>
                    Followers
                </NavLink>
            </NavItem> : <></>}
        </Nav>
        <Nav navbar className="ml-auto">
            {user ? <div>
                    <NavItem>
                        <NavLink style={{cursor: 'pointer'}} onClick={() => {
                            navigate('/logout')
                        }}>
                            Logout
                        </NavLink>
                    </NavItem>
                </div> :
                <div>
                    <NavItem>
                        <NavLink style={{cursor: 'pointer'}} onClick={() => {
                            navigate('/login')
                        }}>
                            Login
                        </NavLink>
                    </NavItem>
                </div>}
        </Nav>
    </Navbar>
}
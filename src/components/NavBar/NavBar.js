import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "shards-react";
import {useAuthStore} from "../../store/AuthStore";

export default function NavBarComponent(props) {
    const [authState] = useAuthStore()
    const {user} = authState
    const navigate = useNavigate()
    const goHome = function () {
        navigate('/')
    }
    const goFollowers = function () {
        navigate('/followers')
    }
    const goUsers = function () {
        navigate('/users')
    }

    return <Navbar type="dark" theme="primary" expand="md" >
        <NavbarBrand style={navbarStyle.item} onClick={goHome}>TwitterClone</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink style={navbarStyle.item} onClick={goHome}>
                    Home
                </NavLink>
            </NavItem>
            {user ?
                <div>
                    <NavItem>
                        <NavLink active style={navbarStyle.item} onClick={goFollowers}>
                            Followers
                        </NavLink>
                    </NavItem>
                </div>

                : <></>}

            <NavItem>
                <NavLink style={navbarStyle.item} onClick={goUsers}>Users</NavLink>
            </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
            {user ? <div>
                    <NavItem>
                        <NavLink style={navbarStyle.item} onClick={() => {
                            navigate('/logout')
                        }}>
                            Logout
                        </NavLink>
                    </NavItem>
                </div> :
                <div>
                    <NavItem>
                        <NavLink style={navbarStyle.item} onClick={() => {
                            navigate('/login')
                        }}>
                            Login
                        </NavLink>
                    </NavItem>
                </div>}
        </Nav>
    </Navbar>
}

const navbarStyle = {
    item: {
        cursor: "pointer"
    }
};
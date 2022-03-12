import React, {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "shards-react";
import {useAuthStore} from "../../store/AuthStore";
import {routesMap} from "../../routes/RoutesMap";

export default function NavBarComponent(props) {
    const [authState] = useAuthStore()
    const {user} = authState
    const navigate = useNavigate()
    const location = useLocation()

    const goHome = function () {
        navigate(routesMap('home'))
    }
    const goFollowers = function () {
        navigate(routesMap('followers'))
    }
    const goUsers = function () {
        navigate(routesMap('users'))
    }

    function linkActive (name) {
        return (routesMap(name) === location.pathname)
    }


    return <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand style={navbarStyle.item}  onClick={goHome}>TwitterClone</NavbarBrand>
        <Nav navbar>
            <NavItem>
                <NavLink style={navbarStyle.item} active={linkActive("home")}  onClick={goHome}>
                    Home
                </NavLink>
            </NavItem>
            {user ?
                <div>
                    <NavItem>
                        <NavLink active={linkActive("followers")}  style={navbarStyle.item} onClick={goFollowers}>
                            Followers
                        </NavLink>
                    </NavItem>
                </div>

                : <></>}

            <NavItem>
                <NavLink style={navbarStyle.item} active={linkActive("users")}  onClick={goUsers}>Users</NavLink>
            </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
            {user ? <div>
                    <NavItem>
                        <NavLink style={navbarStyle.item} onClick={() => {
                            navigate(routesMap("logout"))
                        }}>
                            Logout
                        </NavLink>
                    </NavItem>
                </div> :
                <div>
                    <NavItem>
                        <NavLink style={navbarStyle.item} onClick={() => {
                            navigate(routesMap("login"))
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
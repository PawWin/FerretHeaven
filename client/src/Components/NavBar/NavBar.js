import React, {useState, useContext} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import logo from "../../img/logo.svg";
import './navbar.css';
import {UserContext, useUser} from "../../context/userContext";
import LogOutButton from "../LogOut/LogOutButton";


function Navbar_(){
    const {user} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-white">
                <NavbarBrand href="/">
                    <img src={logo} alt="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar id="navbarNavDropdown">
                    <Nav className="justify-content-end" style={{ width: "100%",paddingRight:"2%" }}>
                        <NavItem>
                            <NavLink href="/" className="nav_item">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" className="nav_item ">O Nas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ferrets" className="nav_item">Nasze Fretki</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kontakt" className="nav_item">Kontakt</NavLink>
                        </NavItem>
                        {user?(
                            <NavItem>
                                <NavLink href="/dashboard" className="nav_item_loginn">
                                    <i className="fa-solid fa-user fa-2xl"></i>
                                </NavLink>
                            </NavItem>

                        ) : <NavItem>
                            <button type="button" className="btn btn-outline-dark nav_item_btn"><NavLink href="/login" className="nav_item_login">Zaloguj sie</NavLink></button>
                        </NavItem>}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar_;
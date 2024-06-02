import React, { useContext } from 'react';
import {UserContext} from "../../context/userContext";
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {NavLink} from "reactstrap";
import '../NavBar/navbar.css'

function LogOutButton() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3001/logout', {}, { withCredentials: true });
            setUser(null); // Clear the user context
            toast.success('Logged out successfully');
            navigate('/login'); // Redirect to the login page
        } catch (err) {
            console.error(err);
            toast.error('Logout failed');
        }
    };

    return (
        <button type="button" className="btn btn-outline-dark nav_item_btn logOutbtn" onClick={handleLogout}><NavLink href="/login" className="nav_item_login">Wyloguj Się</NavLink></button>
    );
}

export default LogOutButton;

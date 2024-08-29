import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useLogout from "../../Hooks/useLogout";
function Navbar() {

    const [open, setOpen] = useState(false);
    const { logout, loading } = useLogout();

    const user = useSelector(state => state.users.user)


    const logoutHandler = async () => {
        await logout();
    }


    return (
        <nav class="navbar">

            <div class="titleflex">
                {/* <!-- Title --> */}
                <img src="copylogo.png" alt="">
                    <div class="title">AgroPact</div>
            </div>


            <div>


                {/* <!-- Navigation Menu --> */}
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>

                {/* <!-- Button for signup --> */}
                <button class="butt">SignUp</button>
                <button class="butt">Login</button>
            </div>
        </nav>
    )
}

export default Navbar;
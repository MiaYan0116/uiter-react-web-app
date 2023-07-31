import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { FaList } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';

const NavigationSiderbar = () => {
    const { pathname } = useLocation();
    const[ignore, tuiter, active] = pathname.split('/');
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
    // return (
    //     <div className="list-group">
    //         {links.map((link) => 
    //             <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
    //             {link}
    //             </Link>
    //         )}
    //     </div>
    // );

    return(
        <div className="list-group">
            <Link to={ "/tuiter/home" } className={`list-group-item ${active === "home" ? "active" : ""}`}> 
              <span style={{ paddingRight: "0.6em" }}><FaHome size={20} /></span> 
							<span className="d-none d-xxl-inline"> Home </span>
						</Link>
            <Link to={ "/tuiter/explore" } className={`list-group-item ${active === "explore" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.5em" }}><FaSearch size={20} /></span> 
							<span className="d-none d-xxl-inline">Explore</span>
						</Link>
            <Link to={ "/tuiter/notifications" } className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.6em" }}><FaBell size={20} /></span> 
							<span className="d-none d-xxl-inline">Notifications</span>
						</Link>
            <Link to={ "/tuiter/messages" } className={`list-group-item ${active === "messages" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.6em" }}><FaEnvelope size={20} /></span> 
							<span className="d-none d-xxl-inline">Messages</span>
						</Link>
            <Link to={ "/tuiter/bookmarks" } className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.6em" }}><FaBookmark size={20} /></span> 
							<span className="d-none d-xxl-inline">Bookmarks</span>
						</Link>
            <Link to={ "/tuiter/lists" } className={`list-group-item ${active === "lists" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.6em" }}><FaList size={20} /></span> 
							<span className="d-none d-xxl-inline">Lists</span>
						</Link>
            <Link to={ "/tuiter/profile" } className={`list-group-item ${active === "profile" ? "active" : ""}`}>
							<span style={{ paddingRight: "0.6em" }}><FaUser size={20} /></span> 
							<span className="d-none d-xxl-inline">Profile</span>
						</Link>
            <Link to={ "/tuiter/more" } className={`list-group-item ${active === "more" ? "active" : ""} `}>
							<span style={{ paddingRight: "0.6em" }}><FaEllipsisH size={20} /></span> 
							<span className="d-none d-xxl-inline">More</span>
						</Link>
        </div>
    );
};
export default NavigationSiderbar;
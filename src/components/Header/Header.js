import React from 'react';
import './Header.css';


function Header() {
    return (
        <div>
         <span onClick={()=> window.scroll(0,0)} className="header">🎥 Cinema Hub 🎬 </span>
        </div>
    );
};

export default Header;
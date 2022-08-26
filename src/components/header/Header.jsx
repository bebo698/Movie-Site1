import React, { Component, useRef,useEffect } from 'react';
import './Header.scss';
import { Link,useLocation } from 'react-router-dom';
import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display:'Home',
        path:'/home'
    },
    {
        display:'Movies',
        path:'/movie'
    },
    {
        display:'TV Series',
        path:'/tv'
    }
];

const  Header= () => { 

        const {pathname} = useLocation();
        const headerref = useRef (null);
        const active = headerNav.findIndex(e => e.path === pathname);

        useEffect (()=> {
            const shrinkHeader = ()=> {
                if (document.body.scrollTop>100||document.documentElement.scrollTop>100)
                {
                    headerref.current.classList.add('shrink');
                }else {
                    headerref.current.classList.remove('shrink');

                }
            }
            window.addEventListener('scroll',shrinkHeader);
            return () => {
                window.removeEventListener('scroll',shrinkHeader);
            };
        },[]);
        
        return (
            <div ref={headerref} className="header__wrap container   ">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/" >tmovies</Link>
                </div>
                <ul className="header__nav">
                    {
                    headerNav.map((e,i) => (
                        <li key={i} className={`${i===active ? 'active' :''}`} style={{listStyle : "none"
                    }}>
                            <Link to = {e.path}>
                                {e.display}
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
    
}

export default Header;
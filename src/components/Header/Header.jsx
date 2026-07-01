import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-menu.svg';
import closeMenu from '../../assets/images/icon-menu-close.svg';
import NavList from './NavList.jsx';
import './Header.css';

export default function Header(){
    const [size, setSize] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        function handleResize(){
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return ()=> window.removeEventListener('resize', handleResize);
    }, []);

    function handleClick(){
        setIsOpen(prev=> !prev);
    }
    return (
        <header className="flex-row align-center mb-3">
            <img src={logo} alt="Logo" />
            <nav>
            { 
                size <= 768 ? 
                    <>
                        <button onClick={handleClick} className='bg-trans border-trans'><img src={isOpen ? closeMenu : menuIcon} alt={isOpen ? 'Close Header Icon' : 'Open Header Icon'} aria-expanded={isOpen}/></button> 
                        <div className={`header-menu ${isOpen ? 'opened' : ''}`}>
                            <NavList flexDirection='flex-column'/>
                        </div>
                    </>
                    : 
                    <NavList flexDirection='flex-row'/>
            }
            </nav>
        </header>
    )
}
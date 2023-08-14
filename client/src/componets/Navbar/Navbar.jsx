import React,{useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const products = useSelector(state => state.cart.products);

    const [open, setOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <Link className ="link" to='/'> <h1 style={{textDecoration:"none"}} >FOOD FAIR</h1></Link>
                </div>
                <div className="center">
                   <div className="searchbar">
                    <SearchIcon className="searchIcon"/>
                    <input placeholder='Search here.. . .' className='searchInput' />
                   </div>
                </div>
                <div className="right">
                    <span> catagories </span>
                    <PersonOutlineOutlinedIcon />
                    <FavoriteBorderOutlinedIcon />
                    <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
            {open &&<Cart/>}
        </div>

    )
}

export default Navbar
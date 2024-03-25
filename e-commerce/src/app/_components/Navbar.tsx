import React from 'react';
import searchIcon from "../../assets/searchIcon.png";
import cartIcon from "../../assets/cartIcon.png";

const Navbar = () => {
    return (
        <nav className="flex flex-col justify-between px-4 py-3 ">
            <div className="flex justify-end">
                <div className="flex gap-3 text-xs font-normal leading-4">
                    <p>Help</p>
                    <p>Orders & Returns</p>
                    <p>Hi, John</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold leading-9">ECOMMERCE</h1>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:underline">Deals</a>
                    <a href="#" className="hover:underline">Categories</a>
                    <a href="#" className="hover:underline">Clearance</a>
                    <a href="#" className="hover:underline">Price Drop</a>
                    <a href="#" className="hover:underline">Sale</a>
                </div>
                <div className="flex gap-3">
                    <div>
                        <img src={searchIcon.src} alt="search" />
                    </div>
                    <div>
                        <img src={cartIcon.src} alt="cart" />
                    </div>
                </div>
            </div>
            <div className='text-center bg-gray-200 p-1 '>
                <p> <span className='pr-3'>&lt;</span>  Get 10% off on business sign up<span className='pl-3'>&gt;</span> </p>
            </div>
        </nav>
    );
};

export default Navbar;

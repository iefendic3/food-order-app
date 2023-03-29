import styles from '../Header/Header.module.css'
import wallpaper from '../../assets/wallpaper.jpg'

import { useState } from 'react';
export default function Header() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>

            <div className='flex flex-row w-full bg-slate-700 justify-between p-5'>
                <h1 className='text-white text-3xl'>Food Order App</h1>
                <div className='flex flex-row bg-red-900 pr-5 pl-5 pb-2 pt-2 rounded-lg'>
                    <button className='text-white'>Your Cart</button>
                    <h2 className='text-white pl-2'>{cartItems.length}</h2>
                </div>
            </div>
            <div className={styles.main_image}>
                <img src={wallpaper} />
            </div>
        </>
    );

}
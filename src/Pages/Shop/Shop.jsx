import { useEffect, useState } from 'react';
import Shops from '../Shops/Shops';

const Shop = () => {
    const [shop, setShop] = useState([]);

    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setShop(data))
    }, []);

    return (
        <div className='p-4'>
            <p className='text-2xl font-bold mb-4'>Get Anything you need from here.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    shop.map(shops => <Shops key={shops.id} shops={shops}></Shops>)
                }
            </div>
        </div>
    );
};

export default Shop;

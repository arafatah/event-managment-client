import React, { useEffect, useState } from 'react';
import Shops from '../Shops/Shops';

const Shop = () => {

    const [shop, setShop] = useState([]);

    useEffect(() => {
        fetch('shop.json')
            .then(res => res.json())
            .then(data => setShop(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {
                shop.map(shops => <Shops key={shops.id} shops={shops}></Shops>)
            }
        </div>
    );
};

export default Shop;
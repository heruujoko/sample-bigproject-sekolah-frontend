import React, { useState } from 'react';
import clsx from 'clsx';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';

const BookInfo = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <div className="tabs">
                <ul>
                    <li onClick={() => setTabIndex(0)} className={clsx({"is-active": tabIndex === 0 })}><a>Deskripsi</a></li>
                    <li onClick={() => setTabIndex(1)} className={clsx({"is-active": tabIndex === 1 })}><a>Info</a></li>
                </ul>
            </div>
            <br />

            { tabIndex === 0 && <div>
                <ProductDescription />
            </div>}
            { tabIndex === 1 && <div>
                <ProductInfo />
            </div>}
            
        </div>
    )
}

export default BookInfo;
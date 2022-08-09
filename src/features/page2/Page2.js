import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../index.css';

const productListDb = [
  { id: 1, productName: 'product1', productInfo: 'info1' },
  { id: 2, productName: 'product2', productInfo: 'info2' },
  { id: 3, productName: 'product3', productInfo: 'info3' },
];

const Page2 = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setProductList(productListDb);
  }, []);

  useEffect(() => {
    return () => {
      console.log('Unmounting page 2');
    };
  });

  return (
    <>
      <h2>Page2</h2>
      {/* // dihapus karena sudah ada outlet di navigation.js */}
      {/* <Link to="/">Back</Link> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {productList.map((product) => {
            return (
              <Link
                className="item"
                key={product.id}
                to={`${product.id}`}
                state={{ product: product }}
              >
                {product.productName}
              </Link>
            );
          })}
        </div>
        <div style={{ marginLeft: '16px' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Page2;

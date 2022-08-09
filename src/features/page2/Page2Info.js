import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const Page2Info = () => {
  // const params = useParams();

  // const [product, setProduct] = useState({})
  // useEffect(() => {
  //   const id = params.id
  //   for (let p of productList) {
  //     if (p.id === id) {
  //       setProduct(p);
  //       break;
  //     }
  //   }
  // }, [params.id])
  // return (
  //     <div>
  //         {params.id ?
  //             <div>
  //                 ID : {product.id}
  //                 Name : {product.productName}
  //                 Info : {product.productInfo}
  //             </div> : <></>}
  //     </div>
  // )
  // tidak perlu diganti

  const {
    state: { product },
  } = useLocation();
  return (
    <div>
      <div>
        ID : {product.id}
        Name : {product.productName}
        Info : {product.productInfo}
      </div>{' '}
    </div>
  );
};

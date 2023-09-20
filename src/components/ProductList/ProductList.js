import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/Slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import "./ProductList.css"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.productReducer.products);
    const status = useSelector(state => state.productReducer.status);
    const error = useSelector(state => state.productReducer.error);

    useEffect(() =>{
        dispatch(fetchData())
    }, [dispatch])

    if (status === 'loading') {
        const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
        return <Spin style={{position:'absolute', top:'40%', left:'50%'}} indicator={antIcon} />
    }
    if (status === 'failed') {
        return <><h3>Uh ho! Something Went Wrong....</h3>
        <p>{error}</p>
        </>
        
    }

    // async function fetchData() {
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     //const response = await fetch('https://api.escuelajs.co/api/v1/products');
    //     const data  = await response.json();
    //     dispatch(loadProducts(data))
    // }

  return (
    <div className='ProductList'>
        {products.map(item => (
            <SingleProduct key={item.id} product={item} /> 
        ))}
    </div>
  )
}

export default ProductList 
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productDetails } from '../redux/action/action'
import { productData } from '../Api/services'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';




const Products = () => {
    const BASE_URL = "https://via.placeholder.com/600/92c952/";
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const { AllProduct } = useSelector((state) => state.root.moviesReducer);
    console.log(AllProduct, "products");

    useEffect(() => {
        productData(setLoader)
            .then(res => {
                dispatch(productDetails(res))
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
        // eslint-disable-next-line
    }, []);
    return (
        <div className="App">
            {!loader ? AllProduct?.map((p) => (
                <div>
                    <img  src={p.image} width={150} height={150}  alt="" />
                    <h4> {p.title}</h4>
                </div>
            )) :
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            }
        </div>
    )
};

export default Products;

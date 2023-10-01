import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    // useEffect(()=>{
    //     axios.get(`someurl /${id}`)
    // })
    return (
        <div>
            <br />
            <h4 className='text-secondary'>Fetchind data for Product ID : {id}</h4>
        </div>
    )
}

export default ProductDetail
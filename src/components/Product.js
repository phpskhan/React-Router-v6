import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Product() {

    const [searchParam, setSearchParam ] = useSearchParams()
    const discounted = searchParam.get("filter") === "discounted"

    return (
        <div className='container'>
            <h1>
                Product Page
            </h1>
            <Outlet />
            <button className='btn btn-primary m-5' onClick={()=>setSearchParam({filter:"discounted"})}>Discounted Products</button>
            <button className='btn btn-primary m-5' onClick={()=>setSearchParam()}>All Products</button>
            <div>
                {
                    discounted ? (<div>
                        Showing All Discounted Items
                    </div>) : (
                        <div>
                            Showing All Items
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Product
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Api() {
    let [product,setProduct] = useState(null)
    async function get(){
        try {
            let url = await fetch("https://api.escuelajs.co/api/v1/products");
            let data = await url.json()
            setProduct(data)
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        get()
    },[])
    if (!product) {
        return <p className="text-gray-500 text-center mt-10">Loading...</p>;
    }
    return (
        <>
            <div className="grid grid-cols-4 mx-auto w-[1300px]">
                {
                    product.map(products => (
                        <Link to={`/product/${products.slug}`} className="w-[280px] border rounded-lg pl-5 m-4" key={products.id}>
                            <div>
                                <img className="rounded-lg mt-4" src={products.category.image} alt="image" width={230} height={100} />
                                <p className="text-black text-[18px] my-2 font-[500]">{
                                    products.title.length > 26 ? `${products.title.slice(0, 25)}...` : products.title
                                }
                                </p>
                                <p className="text-black"><span className="text-white w-[100px] px-[5px] pb-[1.5px] text-[15px] rounded-[20px] h-[50px] mr-2 bg-yellow-300">category </span>{products.category.name}</p>
                                <p className="text-black pb-6"><span className="text-white w-[100px] px-[18px] pb-[1.5px] text-[15px] rounded-[20px] h-[50px] mr-2 bg-green-500">price </span>${products.price} 000</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductById() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function getProductBySlug() {
            try {
                const res = await fetch("https://api.escuelajs.co/api/v1/products");
                const data = await res.json();

                // aka shu joyini gpt qilib berdi bu joyi slug bn topadi va bittasini ekranga chiqaradi
                const found = data.find((item) => item.slug === id);
                setProduct(found);
            } catch (err) {
                console.log(err);
            }
        }

        getProductBySlug();
    }, [id]);

    if (!product) {
        return <p className="text-gray-500 text-center mt-28">Loading...</p>;
    }

    return (
        <div className="p-6 max-w-xl mx-auto">
            <img
                src={product.category.image}
                alt={product.title}
                className="rounded-xl"
            />
            <h1 className="text-3xl text-gray-600 mt-2 font-bold mb-8">{product.title}</h1>
            <div className="flex justify-between">
                <p className="text-gray-600 font-bold text-lg mb-3"><span className="text-white w-[100px] px-[10px] pb-[3px] text-[20px] rounded-[20px] h-[50px] mr-2 bg-yellow-300">Category </span>{product.category?.name}</p>
                <p className="text-green-600 font-bold text-2xl mb-4"><span className="text-white w-[100px] px-[10px] pb-[3px] text-[20px] rounded-[20px] h-[50px] mr-2 bg-green-500">Price </span>${product.price}</p>
            </div>
            <p className="text-gray-700">{product.description}</p>
        </div>
    );
}

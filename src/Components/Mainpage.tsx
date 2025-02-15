"use client"

import ProductCard from "./ProductCard"
import useProductStore from "../Stores/useProduct";
export default function MainPage () {
    const { products } = useProductStore();
    return (
        <div className="w-95p h-32 flex flex-col justify-start items-start font-barlow">
            <h1 className="font-bold mb-10">Projects</h1>
            <div className="w-full flex flex-row justify-between items-center font-bold">
                <div className="w-1/5 flex flex-row justify-between items-start">
                <button>Active Projects</button>
                <button className="text-hardgrey">Archived</button>
                </div>
                <button className="block bg-btnColor py-2 px-8 rounded-lg text-white">Add Project</button>
            </div>
            <div className="w-full mt-5 flex flex-wrap justify-between items-start gap-5">
            {products.map ((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
            </div>
        </div>
    )
}
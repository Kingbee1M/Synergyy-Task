type ProductProps = {
    product: {
        image: string;
        title: string;
        location: string;
        date: string;
        description: string;
        extra1: string;
        extra2: string;
        extra3: string;
        imageNo: string;
        tags: string[];
    };
};
export default function ProductCard ({product}: ProductProps) {
    return (
        <div className="w-23p h-350px mx-[-10] flex flex-col justify-center items-center gap-4 border-2 border-borderColor rounded-lg p-1 text-linkColor">
            <div><img src={product.image} /></div>
            <div className="w-90p h-full flex flex-col justify-start items-start gap-4 text-linkColor">
            <p className="font-bold text-black text-[100%]">{product.title}</p>
            <div className="w-full flex flex-row justify-start items-center text-[50%] gap-2 ml-1">
                <p className="bg-borderColor rounded-md p-1">{product.location}</p>
                <p>Created:{product.date}</p>
            </div>
            <p
  className="w-full text-[9px] overflow-hidden"
  style={{
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  }}
>{product.description}</p>
            <div className="w-60p flex flex-row gap-2 relative bottom-2">
            <div className="w-1/5 h-full flex flex-row relative">
                <img src={product.extra1} className="absolute left-0" />
                <img src={product.extra2} className="absolute left-1" />
                <img src={product.extra3} className="absolute left-2" />
            </div>
            <p className="w-1/2 text-[8px] absolute top-1 left-7">{product.imageNo}</p>
            </div>
            <div className="flex flex-row gap-1">
            {product.tags.map((tag, index) => (
                    <p key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg gap-3 text-[8px]">
                        {tag}
                    </p>
                ))}

            </div>
            </div>
        </div>
    )
}
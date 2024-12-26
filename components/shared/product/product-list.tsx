import Image from "next/image";
import ProductCard from "./product-card";

const ProductList = ({ data, title, limit }: { data: any, title?: string, limit?: number }) => {
    const limitData = limit ? data.slice(0, limit) : data;
    return (<div className="my-10 ">

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {data.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{
            limitData.map((product: any) => (
                <ProductCard key={product.id} product={product} />
            ))
        }</div>) : (<p>No products found.</p>)}
    </div>);
}

export default ProductList;
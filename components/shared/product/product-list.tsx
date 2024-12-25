import Image from "next/image";

const ProductList = ({ data, title, limit }: { data: any, title?: string, limit?: number }) => {
    const limitData = limit ? data.slice(0, limit) : data;
    return (<div className="my-10">

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {data.length > 0 ? (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{
            limitData.map((product: any) => (

                <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
                    <Image src={product.image} alt={product.name} width={65} height={65} priority={true} />
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-600">${product.price}</p>
                </div>
            ))
        }</div>) : (<p>No products found.</p>)}
    </div>);
}

export default ProductList;
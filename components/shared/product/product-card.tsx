import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";

const ProductCard = ({ product }: { product: any }) => {
    return (<Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
            <Link href={`/product/${product.slug}`}>
                <Image src={product.images[0]} alt={product.name} width={300} height={300} priority={true} />
            </Link>
        </CardHeader>
        <CardContent className="p-4">
            <div className="text-xs bold mb-2">{product.brand}</div>
            <Link href={`/product/${product.slug}`}>
                <h6 className="text-sm font-bold">{product.name}</h6>
            </Link>
            <div className="flex flex-between gap-4">
                <p className="text-gray-500">{product.category}</p>
                {product.stock > 0 ? <ProductPrice value={Number(product.price)} /> : <p className="text-red-500">Out of Stock</p>}
            </div>


        </CardContent>
    </Card>);
}

export default ProductCard;
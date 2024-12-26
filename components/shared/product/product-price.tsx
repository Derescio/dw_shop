import { cn } from "@/lib/utils";
const ProductPrice = ({ value, className }: { value: number, className?: string }) => {
    //Ensure two decimal places
    const formattedValue = value.toFixed(2);
    // const formattedValueWithCommas = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //Get the INT and FLOAT values of each item`s price
    const [int, float] = formattedValue.split(".");

    return (<>
        <p className={cn("text-2xl font-bold", className)}>
            <span className="text-xs align-super">$</span>
            {int}
            <span className="text-xs align-super">.{float}</span>
        </p>

    </>);
}

export default ProductPrice;
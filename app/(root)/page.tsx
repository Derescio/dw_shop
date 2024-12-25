import sampleData from '../db/sample-data';
import ProductList from '@/components/shared/product/product-list';
export const metadata = {
  title: 'Home'
};

// const deleay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  //console.log(sampleData)
  // await deleay(1000);
  return (<>
    <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
  </>);
}

export default HomePage;
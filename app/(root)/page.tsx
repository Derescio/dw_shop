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

//Component Description:
//This is the Home Page of the ShopDW Application. It displays a list of products.
//The data for the products is fetched from a sample data file.
//The ProductList component is used to display the list of products.
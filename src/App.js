
import Navbar from './component/Navbar';
import Products from './component/products/Products';
import Hero from './component/slider/Hero';
import TopProduct from './component/topproduct/TopProduct';
import WinterSale from './component/wintersale/WinterSale';

function App() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProduct/>
      <WinterSale/>
        </div>
  );
}

export default App;

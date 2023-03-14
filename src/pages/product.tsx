import { Link } from '../components/link';
import { NavBar } from '../components/nav-bar';
import { ProductList } from '../components/product-list';

export default function ProductsPage() {
  return (
    <div>
      <NavBar>
        <Link
          to="/"
          animateNavigation
          className="inline-flex items-center gap-2 text-gray-500"
        >
          {'<'} Home
        </Link>
      </NavBar>
      <h1 className="text-4xl font-bold mb-6 w-fit [view-transition-name:product-page-title]">
        Products
      </h1>
      <ProductList />
    </div>
  );
}

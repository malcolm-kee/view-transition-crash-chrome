import { Link } from '../components/link';

export default function IndexPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">SPA Demo</h1>
      <p className="mb-6">A SPA view view transition.</p>
      <ul>
        <li>
          <Link
            to="/product"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-700"
            animateNavigation
          >
            <span className="text-lg [view-transition-name:product-page-title]">Products</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

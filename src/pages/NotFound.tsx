import { ROUTES } from "@utils/constants";
import { Link } from "react-router-dom";

const NotFound: React.FC<Props> = () => {
  return (
    <div className="flex items-center justify-center h-full bg-dark-gray-800 text-dark-gray-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page not found</h2>
        <p className="mt-2 text-lg text-gray-400">
        Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to={ROUTES.HOME}
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

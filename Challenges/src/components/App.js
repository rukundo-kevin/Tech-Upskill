import { Link } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <div
      className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-900"
      style={{ flexDirection: "column" }}
    >
      <h2 className="mt-6 text-center text-5xl font-extrabold text-white">
        Welcome to Employee Management app!
      </h2>{" "}
      <br />
      <Link
        to="/login"
        className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
      >
        Register
      </Link>
    </div>
  );
}

export default App;

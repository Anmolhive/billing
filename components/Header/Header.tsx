"use client";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const handleLogout = async () => {
    document.cookie = "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    await fetch("/api/logout"); // Call the logout API
    router.push("/"); // Redirect to login page after logout
  };
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-xl">Rajesh India</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <button onClick={handleLogout} className="btn btn-error text-white">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

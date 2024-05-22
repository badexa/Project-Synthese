import React, { useContext, useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className='text-2xl font-bold text-gray-800 flex items-center gap-2 hover:text-blue-600'>
          <MdDevices className='text-3xl' />
          <Link to={"/"} className='hover:text-blue-600'>
            Electronics
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='Search product here...' className='w-full outline-none px-3 py-2 text-gray-700' onChange={handleSearch} value={search} />
          <button className='text-lg min-w-[50px] h-10 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </button>
        </div>

        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
            {user?._id && (
              <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(prev => !prev)}>
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaUserCircle />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white top-12 right-0 w-48 p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-panel/all-products"} className='block px-4 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setMenuDisplay(prev => !prev)}>Admin Panel</Link>
                  )}
                  <Link to={"/profile"} className='block px-4 py-2 text-gray-700 hover:bg-gray-100' onClick={() => setMenuDisplay(prev => !prev)}>Profile</Link>
                </nav>
              </div>
            )}
          </div>

          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative'>
              <FaShoppingCart />
              <div className='bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition duration-300'>Logout</button>
            ) : (
              <Link to={"/login"} className='px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition duration-300'>Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

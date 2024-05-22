import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='container mx-auto py-8 px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold'>Electronics</h1>
            <p className='mt-2 text-gray-400'>Your Best Place For Good Quality Materiel.</p>
          </div>
          <div className='flex gap-4'>
            <Link to='/' className='text-gray-400 hover:text-white transition duration-300'>Home</Link>
            <Link to='/about' className='text-gray-400 hover:text-white transition duration-300'>About Us</Link>
            <Link to='/contact' className='text-gray-400 hover:text-white transition duration-300'>Contact</Link>
            <Link to='/privacy' className='text-gray-400 hover:text-white transition duration-300'>Privacy Policy</Link>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
          <div className='flex gap-4'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'>
              <FaFacebookF />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'>
              <FaTwitter />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'>
              <FaInstagram />
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-white transition duration-300'>
              <FaLinkedinIn />
            </a>
          </div>
          <div className='mt-4 md:mt-0'>
            <p className='text-gray-400 text-sm'>&copy; {new Date().getFullYear()} Electronics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

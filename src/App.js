import logo from './logo.svg';
import './App.css';
import {NavLink} from 'react-router-dom'
import Main from './component/Main';
import {Nav} from 'react-bootstrap'

function App() {
  return (
    <div>
      <nav class="bg-gray-50 drop-shadow-md md:drop-shadow-xl">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 text-decoration-line: none hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="/assets/mFint.png" alt="Workflow"/>
          <img class="hidden lg:block h-8 w-auto" src="/assets/mFint.png" alt="Workflow"/>
        </div>
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4 ">
            <NavLink to="/" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">Dashboard</NavLink>
            <NavLink to="/creation" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">Creation</NavLink>
            <NavLink to="/contact" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Contact</NavLink>
            <NavLink to="/about" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">About</NavLink>
            <NavLink to="/gallery" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">Gallery</NavLink>
            <NavLink to="/cart" className="no-underline text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium " aria-current="page">Cart</NavLink>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  </nav>
            <Main/>
    </div>
  );
}

export default App;

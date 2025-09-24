import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Search, User, Globe } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 space-x-4 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">عربي</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Wasl Apps</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Retail</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">E-Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <User className="w-4 h-4 mr-1" />
              Login
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-green-600 text-white px-3 py-1 rounded font-bold text-xl">
                wasl
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium flex items-center">
                Renting
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/discovery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Residential</Link>
                <Link to="/discovery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial</Link>
                <Link to="/discovery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Staff Accommodation</Link>
              </div>
            </div>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Buying
            </Link>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Lands
            </Link>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Our Communities
            </Link>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Our Residential Areas
            </Link>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Hospitality
            </Link>
            <Link to="#" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              About Wasl
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center">
            <Button variant="ghost" size="sm">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

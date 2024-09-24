import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center mb-2 sm:mb-0">
          <Link to="/" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-2 text-blue-600">
              <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
              <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
            </svg>
            <span className="font-bold text-2xl text-gray-800">Blogs App</span>
          </Link>
        </div>
        <SearchBar onSearch={() => {}} placeholder="Search blogs" />
        <nav className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <Link to="/" className="header-link mb-1 sm:mb-0">Home</Link>
          <div className="relative group mb-1 sm:mb-0">
            <button className="header-link flex items-center">
              Products
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md z-50">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product 2</a>
            </div>
          </div>
          <div className="relative group mb-1 sm:mb-0">
            <button className="header-link flex items-center">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-1 rounded-md z-50">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</a>
            </div>
          </div>
          <Link to="/dashboard" className="header-link mb-1 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Write
          </Link>
        </nav>
        <button className="header-link mb-1 sm:mb-0 flex items-center" onClick={toggleLanguage}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
          </svg>
          {language}
        </button>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 items-center">
          <Link to="/login" className="header-link mb-1 sm:mb-0">Log in</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

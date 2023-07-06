import React,{ useState } from 'react'
import Header from './Header'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const PortfolioContainer = () => {
  // State variable used to update current page, default set to aabout me page
    const [currentPage, setPage] = useState('About Me')

    const renderPage = () => {
        switch(currentPage) {
          case 'About Me':
            return <About />;
          case 'Portfolio':
            return <Portfolio />;
          case 'Contact':
            return <Contact />;
          case 'Resume':
            return <Resume />;
          default:
            return <About />;
        }
      };

    return (
        <div>
            <Header currentPage={currentPage} setPage={setPage} />
            {renderPage()}
            
        </div>)
        
    }


export default PortfolioContainer
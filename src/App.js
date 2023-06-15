import React,{ useState } from "react"
import Header from './components/Header'

const App = () => {
    const [currentPage, setPage] = useState('About Me')

    <div>
        <Header currentPage={currentPage} setPage={setPage} />
    </div>
    
}

export default App;

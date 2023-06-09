
import HomePage from './pages/HomePage';
import './App.css';
import { Routes, Route} from 'react-router-dom'; 
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './pages/NavBar';
import Whoops404 from './pages/404page';

function App() {
  return (
    
      <div>
        <NavBar />
        <div id= "page-body">
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/articles-list-page" element={<ArticleListPage/>} />
        <Route path="/article/:name" element={<ArticlePage/>} />
        <Route path="*" element={<Whoops404/>} />
        </Routes>  
        </div>
    </div>

  );
}
export default App;

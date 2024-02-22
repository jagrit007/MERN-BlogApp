import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/article/:name' element={<Article/>} ></Route>
          <Route path='/article-list' element={<ArticlesList/>} ></Route>
      </Routes>
    </div>
    </Router>
  );
}

// Comments:
/*  1. To navigate pages -> react-router-dom 
    2. To pass parameters in the Router, i.e browser url `site-url/article/my-first-article` 
       - Use `param` in the Route path like this: `<Route path='/article /:id' element={<Article />}></Route>`
       we use :paramName . In this case it will be :slug
*/

export default App;

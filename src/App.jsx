import './style.css'
import MovieList from './comp/MovieList'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Movie from "./comp/Movie"
import Footer from './Footer'
import Search from './comp/Search'
import Form from './comp/Form'
import Ruletka from './Ruletka'
// import Navphone from './Navphone'
import FAQ from './FAQ'
import Onas from './Onas'


function App() {
  const [LV, setLV] = useState({ initialState: false })
  return (
    <div className="main">
      <div className="container">
        <BrowserRouter>
          <header>
            <div className="logo">
              <h1>ISID</h1>
            </div>
            <div className="links">
              <Link to="/">главная</Link>
              <Link to="/popular">популярные</Link>
              <Link to="/o_nas">о нас</Link>
              <Link to="/FAQ">FAQ</Link>
            </div>
            <div className="navbar">
              <div className="button-navbar">
                <button onClick={() => setLV(!LV)}>
                  {LV ? <img src="rightarrow.png" alt="" /> : <img src="leftarrow.png" alt="" />}
                </button>
                {LV && <div className="navbar-items">
                  <div className="navbar-links">
                    <li><Link to="/">главная</Link></li>
                    <li><Link to="/popular">популярные</Link></li>
                    <li><Link to="/o_nas">о нас</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                  </div>
                </div>}
              </div>
            </div>
          </header>
          <div className="search">
            <Form />
          </div>
          {/* <div className="poisk">
            <div className="container">
              <div className="poisk-inner">
                <div className="poisk-input">
                  <input type="poisk" />
                  <span>найти</span>
                </div>
              </div>
            </div>
          </div> */}

          <Switch>
            <Route exact path="/">
              <MovieList />
            </Route>
            <Route path="/popular">
              <MovieList />
            </Route>
            <Route path="/movie/:id">
              <Movie />
            </Route>
            <Route path="/search/:q">
              <Search />
            </Route>
            <Route path="/rulet">
              {/* <Ruletka /> */}
              {/* <Navphone /> */}
            </Route>
            <Route path="/FAQ">
              <FAQ />
            </Route>
            <Route path="/o_nas">
              <Onas />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;

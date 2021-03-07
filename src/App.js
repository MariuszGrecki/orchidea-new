import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss"
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Section from "./pages/Section";
import Footer from "./pages/Footer";
import MyFlowers from "./pages/MyFlowers";
import Biology from "./pages/Biology";
import AdComent from "./pages/AdComent";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <header className="header">
                    {<Header/>}
                </header>
                <nav >
                    <ul className="nav">
                        <li className="nav__li"><NavLink to="/" exact>Witaj </NavLink></li>
                        <li className="nav__li"><NavLink to="/MyFlowers">Moje orchidee </NavLink></li>
                        <li className="nav__li"><NavLink to="/Biology">Uprawa orchidei </NavLink></li>
                        <li className="nav__li"><NavLink to="/AdComent">Nasze porady </NavLink></li>
                        <li className="nav__li"><NavLink to="/Contact">Kontakt </NavLink></li>
                    </ul>
                </nav>
                <section className="section">
                    <Switch>
                        <Route path="/" exact component={Section}/>
                        <Route path="/MyFlowers" component={MyFlowers}/>
                        <Route path="/Biology" component={Biology}/>
                        <Route path="/AdComent" component={AdComent}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </section>
                <footer>
                    {<Footer/>}
                </footer>
            </div>
        </BrowserRouter>
)
}


export default App;

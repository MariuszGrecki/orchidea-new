import React, {Component, useState} from "react";
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
import Button from '@material-ui/core/Button';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


const App = () => {
   let [show, setShow] = useState(true)

    const change_off =  {
       display: "none",
    }
    const change_on = {
       display:"block",
    }

    const changeShow = () => {
        if (show === true) { setShow (false)}
        else {setShow(true)}
    }

    return (
        <BrowserRouter>
            <div className="app">
                <header className="header">
                    <Button variant="contained" className="header__button" onClick={e => changeShow(e)}>Menu</Button>
                    {<Header/>}
                </header>
                <nav >
                    <ul className="nav1">
                        <li className="nav__li"><NavLink to="/Welcome" exact>Witaj </NavLink></li>
                        <li className="nav__li"><NavLink to="/MyFlowers">Moje orchidee </NavLink></li>
                        <li className="nav__li"><NavLink to="/Biology">Uprawa orchidei </NavLink></li>
                        <li className="nav__li"><NavLink to="/AdComent">Nasze porady </NavLink></li>
                        <li className="nav__li"><NavLink to="/Contact">Kontakt </NavLink></li>
                    </ul>
                    <ul className="nav" style={show ===true? change_off : change_on}>
                        <li className="nav__li"><NavLink to="/Welcome" exact>Witaj </NavLink></li>
                        <li className="nav__li"><NavLink to="/MyFlowers">Moje orchidee </NavLink></li>
                        <li className="nav__li"><NavLink to="/Biology">Uprawa orchidei </NavLink></li>
                        <li className="nav__li"><NavLink to="/AdComent">Nasze porady </NavLink></li>
                        <li className="nav__li"><NavLink to="/Contact">Kontakt </NavLink></li>
                    </ul>
                </nav>
                <section className="section">
                    <Switch>
                        <Route path="/orchidea-new/" exact component={Section}/>
                        <Route path="/Welcome"  component={Section}/>
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

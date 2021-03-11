import React, { useState} from "react";
import "./scss/main.scss"
import Header from "./pages/Header";
import HeaderTwo from "./pages/HeaderTwo";
import HeaderThree from "./pages/HeaderThree";
import HeaderFour from "./pages/HeaderFour";
import HeaderFive from "./pages/HeaderFive";
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
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';



const App = () => {
    let [show, setShow] = useState(true)
    const change_off = {
        display: "none",
    }
    const change_on = {
        display: "block",
    }
    const changeShow = () => {
        if (show === true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return (
        <BrowserRouter>
            <div className="app">
                <Button variant="contained" className="header__button" onClick={e => changeShow(e)}>Menu</Button>
                <nav>
                    <ul className="nav" style={show === true ? change_off : change_on}>
                        <div>
                            <li><h1 className="nav__title">Orchidee</h1></li>
                        </div>
                        <div className="nav__navigation">
                            <li className="nav__li"><NavLink to="/Welcome" exact>Witaj </NavLink></li>
                            <li className="nav__li"><NavLink to="/MyFlowers">Moje orchidee </NavLink></li>
                            <li className="nav__li"><NavLink to="/Biology">Uprawa orchidei </NavLink></li>
                            <li className="nav__li"><NavLink to="/AdComent">Nasze porady </NavLink></li>
                            <li className="nav__li"><NavLink to="/Contact">Kontakt </NavLink></li>
                        </div>
                    </ul>
                </nav>
                <header>
                    <Switch>
                        <Route path="/" exact component={Header}/>
                        <Route path="/orchidea-new/" exact component={Header}/>
                        <Route path="/Welcome" component={Header}/>
                        <Route path="/MyFlowers" component={HeaderTwo}/>
                        <Route path="/Biology" component={HeaderThree}/>
                        <Route path="/AdComent" component={HeaderFour}/>
                        <Route path="/Contact" component={HeaderFive}/>
                    </Switch>
                </header>
                <section className="section">
                    <Switch>
                        <Route path="/orchidea-new/" exact component={Section}/>
                        <Route path="/Welcome" component={Section}/>
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

import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import TipsOne from "./TipsOne";
import TipsSecond from "./TipsSecond";
import TipsThird from "./TipsThird";

const Biology = () => {
    return (
        <div className="biology">
            <div>
                <ul className="biology__nav">
                    <li className="biology__li">
                        <NavLink className="biology__navlink" to="/Biology/" exact>
                            Uprawa i sadzenie storczyków </NavLink>
                    </li>
                    <li className="biology__li">
                        <NavLink className="biology__navlink" to="/Biology/TipsSecond">
                            Podlewanie i nawożenie storczyków </NavLink>
                    </li>
                    <li className="biology__li">
                        <NavLink className="biology__navlink" to="/Biology/TipsThird">
                            Rozmnażanie storczyków</NavLink>
                    </li>
                </ul>
            </div>
            <div className="biology__section">
                <section>
                    <Switch>
                        <Route path="/Biology/" exact component={TipsOne}/>
                        <Route path="/Biology/TipsSecond" component={TipsSecond}/>
                        <Route path="/Biology/TipsThird"component={TipsThird}/>
                    </Switch>
                </section>
            </div>
        </div>
    );
};

export default Biology;
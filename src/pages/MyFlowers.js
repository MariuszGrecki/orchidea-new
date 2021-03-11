import React from 'react';
import Antoni from "./Antoni";
import Barbara from "./Barbara";
import Kasia from "./Kasia";
import ErrorPage from "./ErrorPage";
import {
    Route,
    Switch,
    NavLink,
} from 'react-router-dom';

const MyFlowers = () => {
    return (
        <div className="myflowers">
            <div>
                <ul className="myflowers__nav">
                    <li className="myflowers__li">
                        <NavLink className="myflowers__navlink" to="/Myflowers/" exact>Antoni </NavLink>
                    </li>
                    <li className="myflowers__li">
                        <NavLink className="myflowers__navlink" to="/Myflowers/Kasia">Basia </NavLink>
                    </li>
                    <li className="myflowers__li">
                        <NavLink className="myflowers__navlink" to="/Myflowers/Barbara">Barbara</NavLink>
                    </li>
                </ul>
            </div>
            <div className="myflowers__section">
                <section>
                    <Switch>
                        <Route path="/MyFlowers/" exact component={Antoni}/>
                        <Route path="/MyFlowers/Kasia" component={Kasia}/>
                        <Route path="/MyFlowers/Barbara"component={Barbara}/>
                        <Route component={ErrorPage}/>
                    </Switch>
                </section>
            </div>
        </div>
    );
};

export default MyFlowers;
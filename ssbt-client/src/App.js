import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import {Provider} from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import jwt_decode from "jwt-decode";
import setJwtToken from "./securityUtils/setJwtToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJwtToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);

    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;

    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/login";
    }
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App Site">
                    <div className="Site-content">
                        <Header/>

                        {
                            // Public routes
                        }

                        {
                            // Private routes
                        }

                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/addProject" component={AddProject}/>
                        <Route exact path="/updateProject/:id" component={UpdateProject}/>
                        <Route exact path="/projectBoard/:id" component={ProjectBoard}/>
                        <Route exact path="/addProjectTask/:id" component={AddProjectTask}/>
                        <Route exact path="/updateProjectTask/:backlog_id/:pt_id" component={UpdateProjectTask}/>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

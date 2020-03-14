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

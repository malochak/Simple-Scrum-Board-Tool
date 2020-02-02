import React, {Component} from 'react';
import {Link} from "react-router-dom";
import AddProjectTaskButton from "./ProjectTasks/AddProjectTaskButton";

class ProjectBoard extends Component {
    render() {
        return (
            <div className="container-fluid mt-3">
                {
                    //<!-- Backlog STARTS HERE -->
                }
                <h1>Project Board</h1>
                <div className="new-project-section m-3">
                    <AddProjectTaskButton id={this.props.match.params}/>
                    <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>

                            {
                                //!-- SAMPLE PROJECT TASK STARTS HERE --
                            }
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: projectSequence -- Priority: priorityString
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">project_task.summary</h5>
                                    <p className="card-text text-truncate ">
                                        project_task.acceptanceCriteria
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        View / Update
                                    </a>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            {
                                //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {
                                //<!-- SAMPLE PROJECT TASK STARTS HERE -->
                                //<!-- SAMPLE PROJECT TASK ENDS HERE --

                            }

                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {
                                // <!-- SAMPLE PROJECT TASK STARTS HERE -->
                                // <!-- SAMPLE PROJECT TASK ENDS HERE -->
                            }

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectBoard;
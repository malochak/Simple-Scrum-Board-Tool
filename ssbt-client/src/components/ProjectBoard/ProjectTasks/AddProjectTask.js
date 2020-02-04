import React, {Component} from 'react';
import {connect} from "react-redux"
import classname from "classnames"
import {addProjectTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types"

class AddProjectTask extends Component {

    constructor(props) {
        super(props);
        const {id} = this.props.match.params;

        this.state = {
            "summary": "",
            "acceptanceCriteria": "",
            "status": "",
            "priority": 0,
            "dueDate": "",
            "projectIdentifier": id,
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const newTask = {
            "summary": this.state.summary,
            "acceptanceCriteria": this.state.acceptanceCriteria,
            "status": this.state.status,
            "priority": this.state.priority,
            "dueDate": this.state.priority,
        };

        this.props.addProjectTask(this.state.projectIdentifier, newTask, this.props.history);

    }

    render() {
        return (
            <div className="container-fluid mt-3">
                <h2>New project task</h2>
                <hr/>
                <div className="container new-proj-container mt-5">
                    <div className="container m-5 m-auto p-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="summary"
                                       placeholder="Project Task summary"
                                       value={this.state.summary}
                                       onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria"
                                              name="acceptanceCriteria"
                                              value={this.state.acceptanceCriteria}
                                              onChange={this.onChange}/>
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" name="dueDate"/>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="priority"
                                        value={this.state.priority}
                                        onChange={this.onChange}>
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status"
                                        value={this.state.status}
                                        onChange={this.onChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>

                            <input
                                type="submit"
                                className="btn btn-md project-button btn-block mt-5"
                                value="Create"
                            />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

AddProjectTask.propTypes = {
    addProjectTask: PropTypes.func.isRequired
};

export default connect(
    null,
    {addProjectTask})
(AddProjectTask);
import React, { Component } from 'react';

export default class TaskForm extends Component {

    state={
        title:'',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

render() {
    return(
        <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="write a task" 
            name="title"
            onChange={this.onChange} 
            value={this.state.title}/>
            <br />
            <br />
            <textarea placeholder= "write a description"
            name="description" 
            onChange={this.onChange} 
            value={this.state.description}></textarea>
            <input type="submit"/>
        </form>
    )
}

}
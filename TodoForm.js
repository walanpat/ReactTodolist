import React from 'react';
import shortid from 'shortid';
export default class TodoList extends React.Component{
    state = {
        text: ""
    };
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        //submit form
        this.props.onSubmit({
            text: this.state.text, 
            complete: false,
            id: shortid.generate()
        })
        this.setState({
            text: ""
        })
    } 
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                name="text" 
                value={this.state.text} 
                onChange={this.handleChange}
                placeholder="Todo..."
                />   
                <button onClick={this.handleSubmit}>Add Todo</button>
                </form> 
        )}
}

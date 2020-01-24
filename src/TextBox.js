import React from 'react';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo_items: [ ],
            todo_item: ''
        }

       this.myChangeHandler= this.myChangeHandler.bind(this);
        this.mySubmitHandler= this.mySubmitHandler.bind(this);
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({todo_items: [...this.state.todo_items, this.state.todo_item], todo_item: '' });
    }

    myChangeHandler = (event) => {
        this.setState({todo_item: event.target.value});

        // this.setState({todo_item: event.target.value , todo_items: [...this.state.todo_items, event.target.value]});
    }

    resetTodo = (event) => {
        this.setState({todo_items: []});
    }

    render(){
        return(
            <div>
                <button className='button' onClick={this.resetTodo}> Clear </button>
                <form  onSubmit={this.mySubmitHandler}>
                    <input type='text'
                           value={this.state.todo_item}
                           onChange={this.myChangeHandler}
                    />
                    <button className='button'
                        type='submit'> ADD
                    </button>
                </form>
                <TodoList list={this.state.todo_items}/>
            </div>
        )
    }
}

export default TextBox;

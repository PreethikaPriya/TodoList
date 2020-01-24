import React from 'react';
import TextBox from './TextBox'
import AddTodo from './AddTodo'
import TodoList from "./TodoList";

class Home extends React.Component{
    render(){
        return(
            <div>
                <TextBox/>
                {/*<AddTodo/>*/}
                <br/>
                {/*<TodoList />*/}
            </div>
        );
    }
}

export default Home;

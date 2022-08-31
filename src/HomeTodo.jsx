import React, { useState } from 'react'
import Header from './Header'
import H1 from './HomeTodoComp/H1'
import H3 from './HomeTodoComp/H3'
import Container from './HomeTodoComp/Container'
import Button from './HomeTodoComp/Button'
import CheckBox from './HomeTodoComp/CheckBox'
import TodoForm from './HomeTodoComp/TodoForm'


let i = 0;

function HomeTodo() {

    const [todoFormVisible, updateTodoFormVisible] = useState(false)

    const [todoList, setTodoList] = useState([]);

    const [doneList, setDoneList] = useState([]);

    const showTodoCard = () => {
        updateTodoFormVisible(true);
        console.log('showTodoCard')

    }

    const hiddenTodoCard = () => updateTodoFormVisible(false);


    const addTodoList = (todoTitle) => {
        setTodoList([...todoList, { id: i++, title: todoTitle }])
    }

    const deleteTodo = (todo) => {
        const newTodoList = todoList.filter(t => t.id !== todo.id);
        setTodoList(newTodoList);
    }

    const deleteDone = (todo) => {
        const newDoneList = doneList.filter(t => t.id !== todo.id);
        setDoneList(newDoneList);
    }

    const markAsDone = (todo) => {
        deleteTodo(todo)
        setDoneList([...doneList, todo])
    };

    const markAsNotDone = (todo) => {

        deleteDone(todo)
        setTodoList([...todoList, todo]);
    }


    const deleteTodoRow = (todo, done) => { 
        if (done) {
            deleteDone(todo)
        } else {
            deleteTodo(todo)
        }

    }

    return (
        <>
            <Header />
            <Container>
                <div className="pb-12">
                    <H1>Thing to get done</H1>
                </div>
                <div className="pb-5">
                    <H3>Things to do</H3>
                </div>


                {!todoList.length && <span>No todo here !</span>}

                {todoList.map(t => <CheckBox onDelete={deleteTodoRow} done={false} key={t.id} text={t} onStatusChange={markAsDone}></CheckBox>)}




                <div className="py-8">

                    {!todoFormVisible && <Button theme="highlight" onClick={showTodoCard} icons="+"> Add to Card</Button>}

                    {
                        todoFormVisible && <TodoForm onClose={hiddenTodoCard} onCreate={addTodoList} />

                    }
                </div>
                <H3>Things done</H3>
                <div className="space-y-2 py-2">

                    {!doneList.length && <span>No Done here !</span>}

                    {doneList.map(t => <CheckBox onDelete={deleteTodoRow} done={true} key={t.id} text={t} onStatusChange={markAsNotDone}></CheckBox>)}

                </div>


            </Container>

        </>
    )
}

export default HomeTodo;
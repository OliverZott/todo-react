// eslint-disable-next-line 
import React, { useEffect, useState, useCallback } from 'react';
// eslint-disable-next-line 
import { Tabs, Layout, Row, Col, Input, message } from 'antd';
import './TodoList.css';
import TodoTab from './TodoTab';
import TodoForm from './TodoForm';
// eslint-disable-next-line 
import { loadTodos, getTodo, createTodo, updateTodo, deleteTodo } from '../services/todoService';
// eslint-disable-next-line 
import { ALL } from 'dns';

const { TabPane } = Tabs;
const { Content } = Layout;



const TodoList = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [todos, setTodos] = useState([]);
    const [activeTodos, setActiveTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);  // [] missing ????


    // method to make changes to todo
    const handleFormSubmit = (todo) => {
        console.log('Todo to create', todo);
        createTodo(todo).then(onRefresh());
        message.success('Todo added.')
    }

    const handleRemoveTodo = (todo) => {
        deleteTodo(todo.id).then(onRefresh());
        message.warn('Todo removed.')
    }

    const handleToggleTodoStatus = (todo) => {
        todo.completed = !todo.completed;
        updateTodo(todo).then(onRefresh());
        message.info('Todo status updated.')
    }


    // Methods for refreshing screen. (refreshing state in react can be complicated!)
    const refresh = () => {
        loadTodos()
            .then(json => {
                setTodos(json);
                setActiveTodos(json.filter(todo => todo.completed === false));
                setCompletedTodos(json.filter(todo => todo.completed === true))
            }).then(console.log('fetch completed!'))
    }

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        let data = await loadTodos();
        setTodos(data);
        setActiveTodos(data.filter(todo => todo.completed === false));
        setCompletedTodos(data.filter(todo => todo.completed === true));
        setRefreshing(false);
        console.log('Refresh state', refreshing)
    }, [refreshing]);

    useEffect(() => {
        refresh();
    }, [onRefresh])  // means: it MONITORS onRefresh!


    return (
        <Layout className='layout'>
            <Content style={ { padding: '0, 50' } }>
                <div className="todolist">
                    <Row>
                        <Col span={ 14 } offset={ 5 }>
                            <h1>Todos</h1>
                            <TodoForm onFormSubmit={ handleFormSubmit } />
                            <br />
                            <Tabs defaultActiveKey="all">
                                <TabPane tab="All" key="all">
                                    <TodoTab todos={ todos } onTodoToggle={ handleToggleTodoStatus } onTodoRemoval={ handleRemoveTodo } />
                                </TabPane >
                                <TabPane tab="Active" key="active">
                                    <TodoTab todos={ activeTodos } onTodoToggle={ handleToggleTodoStatus } onTodoRemoval={ handleRemoveTodo } />
                                </TabPane>
                                <TabPane tab="Complete" key="complete">
                                    <TodoTab todos={ completedTodos } onTodoToggle={ handleToggleTodoStatus } onTodoRemoval={ handleRemoveTodo } />
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout >
    )
}




export default TodoList;


// eslint-disable-next-line 
import React, { userEffect } from 'react';
// eslint-disable-next-line 
import { Tabs, Layout, Row, Col, List } from 'antd';
import Todo from './TodoItem'


const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }) => {
    return (

        <List
            locale={{ emptyText: 'Nothing todo', }}
            dataSource={todos}
            renderItem={(todo) => (
                <Todo
                    todo={todo}
                    onTodoToggle={onTodoToggle}
                    onTodoRemoval={onTodoRemoval}
                />
            )}
            pagination={{
                position: 'bottom',
                pageSize: 5,
            }}
        />
    )
}

export default TodoTab;
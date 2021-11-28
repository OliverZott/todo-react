// eslint-disable-next-line 
import React, { useState } from 'react';
// eslint-disable-next-line 
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';


const Todo = ({ todo, onTodoRemoval, onTodoToggle }) => {
    return (
        <List

            actions={ [
                <Tooltip
                    title={ todo.completed ? 'Marks as uncompleted' : 'Mark as completed' }>
                    <switch
                        checkedChildren={ <CheckOutlined /> }
                        unCheckedChildren={ <CloseOutlined /> }
                        onChange={ () => onTodoToggle(todo) }
                        defaultChecked={ todo.completed } />
                </Tooltip>,
                <Popconfirm
                    title={ 'Sure you wanna delete?' }
                    onConfirm={ () => onTodoRemoval(todo) } >
                    <Button className='remove-todo-button' type="primary" danger>
                        X
                    </Button>
                </Popconfirm>
            ] }

            className='list-item'
            key={ todo.id }

        >



            <div className="todo-item">
                <Tag color={ todo.completed ? 'cyan' : 'red' } className="todo-tag">
                    { todo.title }
                </Tag>
            </div>

        </List>
    )
}

export default Todo;
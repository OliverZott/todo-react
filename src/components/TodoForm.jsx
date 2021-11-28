import React from 'react';
import { Form, Row, Input } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';


const TodoForm = ({ onFormSubmit }) => {
    const [form] = Form.useForm();

    const onFinish = () => {
        onFormSubmit({
            title: form.getFieldValue('title'),
            completed: false
        });
        console.log(form.getFieldValue('title'));

        form.resetFields();
    }

    return (
        <Form
            form={ form }
            onFinish={ onFinish }
            layout="horizontal"
            className="todo-form">
            <Row gutter={ 20 }>
                <col xs={ 24 } sm={ 24 } md={ 17 } lg={ 19 } xl={ 20 }>
                    <Form.Item
                        name={ 'title' }
                        rules={ [{ required: true, message: 'Field is required' }] }>
                        <Input placeholder='Insert Todo'></Input>
                    </Form.Item>
                </col>
                <col xs={ 24 } sm={ 24 } md={ 7 } lg={ 5 } xl={ 4 } >
                    <button type="primary" htmlType="submit" block>
                        <PlusCircleFilled>
                            Add Todo
                        </PlusCircleFilled>
                    </button>
                </col>
            </Row>

        </Form >
    )
}

export default TodoForm;
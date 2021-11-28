// eslint-disable-next-line 
import { json } from "stream/consumers";

// const baseUrl = 'localhost:8081/api/todos';
const baseUrl = `${process.env.REACT_APP_API_BASEURL}/todos`;


export const loadTodos = () => {
    return fetch(baseUrl).then((res) => res.json());
}


export const getTodo = async (id: number) => {
    const res = await fetch(`${baseUrl}/${id}`);
    return await res.json();
}


// TODO: remove hard coded todo properties!
export const createTodo = (todo: any) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "title": todo.title,
            "completed": false
        }),
    }).then((res) => res.json());
}


// Using todo, not id like in API endpoint!
export const updateTodo = (todo: any) => {
    return fetch(`${baseUrl}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "id": todo.id,
            "title": todo.title,
            "completed": todo.completed
        }),
    }).then((res) => res.json());
}


export const deleteTodo = (id: number) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
}
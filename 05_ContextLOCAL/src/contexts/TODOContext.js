import { createContext ,useContext } from "react";

export const TodoContext = createContext({
    Todos : [
        {
            id: 1, 
            todo: 'Buy groceries', 
            completed: false
        },
        {},
        {},
    ],
    updateTodo : (id , todo) => {},
    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}
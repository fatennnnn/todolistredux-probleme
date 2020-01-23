import  {ADD_TODO} from './Actiontype'
import  {DELETE_TODO} from './Actiontype'
import {EDIT_TODO,EDITINPT_TODO} from './Actiontype'


export const addTodo = (text) => ({
	type:ADD_TODO,
    payload:text
})
export const deleteTodo = (id) => ({
type:DELETE_TODO,
payload:id
})
export const editTodo =(id)=>({
    type:EDIT_TODO,
    payload:id
})
export const editinputTodo=(newName,id)=>({
    type:EDITINPT_TODO,
    payload:{newName,id}
})
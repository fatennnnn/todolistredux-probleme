import {ADD_TODO,DELETE_TODO,EDIT_TODO,EDITINPT_TODO} from '../Action/Actiontype'

const tab=[]
const Todoreducer = (state =tab , action) => {
	switch (action.type) {
		case ADD_TODO :
			return state.concat(action.payload)
		case DELETE_TODO :
			return state.filter((el,i)=>el.id!==action.payload)
		case EDIT_TODO :
			return state.map((el,i)=>el.id===action.payload?{...el,isComplete:!el.isComplete}:el)
		case EDITINPT_TODO :
			return state.map((el,i) => el.id === action.payload.id? {...el,text:action.payload.newName}:el);


		default:
			return state
	}
}
export default Todoreducer
 

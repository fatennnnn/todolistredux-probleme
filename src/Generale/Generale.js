import Todoreducer from '../reducer/Reducer.js'
import './Generale.css'
import React, { Component } from 'react'
import {connect} from "react-redux"
import {deleteTodo,editTodo,editinputTodo} from '../Action/Action'
// import Card from './card'


class Generale extends Component {
    state={
        isEditing:false,
        taskField:""
    }
    handleClick=()=>{
        this.setState({isEditing:!this.state.isEditing})
    }
    handleChange =(e)=> {
        this.setState({ taskField: e.target.value });
      };
    render() {
        return (
            <div>
                {this.props.items.map((el,i)=>
                 <div key={el.id}>
                 <p style={{textDecoration:el.isComplete?"line-through":"none"}} className={this.state.isEditing&&'displayInput'}>{el.text} </p>
 
                 <input className='myInput' placeholder='helooo' type='text' style={{ display: this.state.isEditing ? 'inline' : 'none' }} value={this.state.taskField}          
          onChange={this.handleChange}/>
 
 
     <button onClick={()=>this.props.edit(el.id)}>{el.isComplete?"Undo":"Complete"}</button>
 
                <button onClick={()=>this.props.remove(el.id)}>Delete</button>
        
 
                <button onClick={()=> {this.props.editinput(this.state.taskField,el.id);this.handleClick(el.text)}}>Edit</button>
 
 
                 </div>
                )
                }
                
            </div>
        )
    }
}
const mapStateToProps=state=>({
    items:state
})

const mapDispatchToProps=dispatch=>({
    remove:(id)=>dispatch(deleteTodo(id)),
    edit:(id)=>dispatch(editTodo(id)),
    editinput:(newName,id)=>dispatch(editinputTodo(newName,id))
    
    
})
 
export default connect(mapStateToProps,mapDispatchToProps)  (Generale)



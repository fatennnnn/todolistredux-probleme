import React, { Component } from 'react'
import './Todo.css'
import {addTodo} from '../Action/Action'
import {connect} from "react-redux"
class Todo extends Component {
   state={
       newtodo:"",
   }
        onchange=(e)=>{this.setState({newtodo:e.target.value})}

        vide=()=>{
            this.setState({
                newtodo:""
            })
        }
           

    
    render() {
        return (
            <div className="todocenter">
            <p>Daily Todo Lists</p>
                <input placeholder="entrer votre text" type="text" value={this.state.newtodo} onChange={this.onchange}></input>
                <button onClick={()=>{this.props.add({text:this.state.newtodo,id:Date.now(),isComplete:false,test:false});this.vide()}} >+</button>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    add:(newTodo)=>dispatch(addTodo(newTodo))

})
 
export default connect(null,mapDispatchToProps) (Todo)


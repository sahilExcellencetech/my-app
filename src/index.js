import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import data from  './data.json';
import classnames from 'classnames/bind';

class TodoApp extends React.Component{

  constructor(){
    super();
    this.state = {
      data:data.data,
      text : '',
      active:false,
      value:'',
      bool : true,
      disp : false
    };
  }
  handleClick = (e) =>{
    const changeS = e.status === false?true:false;
    const changeB  = e.badge === ""?"completed":"";
    e.badge = changeB;
    e.status = changeS
    this.setState({
      status: changeS,
      badge: changeB
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      this.setState({active:true});
     return;
   }
   this.setState({active:false});
   const newItem = {
     id: Date.now(),
     text: this.state.text,
     status : false,
     bool:true,
     badge:""
   };
   this.setState( prevState =>({
     data : prevState.data.concat(newItem),
     text : ""
   }));
 }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }
  handleTb = (e) =>{
    this.setState({ value: e.target.value });
  }

  removeData = (e) => {
    var array = this.state.data;
    for(var i=0;i< array.length;i++){
      if(array[i].id===e.id){
        array.splice(i,1);
      }
    }
    this.setState({
      data:array
    })
  }

  editData = (e) => {
    const boo = this.state.bool === true?false:true;
    const dis = this.state.disp === false?true:false
    e.bool = boo
    e.disp = dis
    this.setState({
      bool : boo,
      disp : dis
    })
  }

  saveData = (e) => {
    const boo = this.state.bool === true?false:true;
    const dis = this.state.disp === false?true:false;
    e.bool = boo
    e.disp = dis
    e.text = this.state.value
    this.setState({
      bool : boo,
      disp : dis
    });
    console.log(e);
  }


  render(){
    let border = classnames({"alertInput" : this.state.active,"form-control":true});
    const dataList = this.state.data.map((data, i) => <li className="list-group-item" key={data.id}>
    <input type="checkbox" disabled={data.disp} onClick={(e)=> this.handleClick(data, e)} />
    &nbsp;&nbsp;
    {data.text}
    &nbsp;&nbsp;
    <input type="text"  disabled={data.bool} onChange={this.handleTb} />
    <button className="btn btn-success" disabled={data.bool} value={data.id} onClick={(e)=> this.saveData(data, e)}>Save</button>
    <button className="btn btn-warning" disabled={data.disp} value={data.id} onClick={(e)=> this.editData(data, e)}>Edit</button>
    <button className="btn btn-danger" disabled={data.disp} onClick={(e) => this.removeData(data, e)}>Remove</button>
    <span className="badge" disabled={data.disp} >{data.badge}</span>
     </li>
    );
    return(
    <div id="content">
      <h2>Todo App</h2>
      <ul className="list-group">
        {dataList}
      </ul>
      <div className="form-group">
        <br />
        <form onSubmit={this.handleSubmit}>
        <label>Todo</label>
        <input type="text" className={border} onChange={this.handleChange}
        value={this.state.text}
        placeholder="Your Todo.."
        id="usr" />
        <br />
        <button  type="submit" className="btn btn-default">
          Submit
        </button>
        </form>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

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
      text : "",
      id : [],
      status : false
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
     badge:""
   };
   this.setState( prevState =>({
     data : prevState.data.concat(newItem),
     text : "",
     status : false
   }));
 }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }
  render(){
    let border = classnames({"alertInput" : this.state.active,"form-control":true});
    const dataList = this.state.data.map((data, i) => <li className="list-group-item" key={'data_'+i}>
    <input type="checkbox" onClick={(e)=> this.handleClick(data, e)} />
    {data.text}
    <span className="badge" >{data.badge}</span>
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
        <form>
        <label>Todo</label>
        <input type="text" className={border} onChange={this.handleChange}
        value={this.state.text}
        placeholder="Your Todo.."
        id="usr" />
        <br />
        <button onClick={this.handleSubmit} type="button" className="btn btn-default">
          Submit
        </button>
        </form>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import data from  './data.json';


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

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
     return;
   }
   const newItem = {
     id: Date.now(),
     text: this.state.text,
     status : false
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
    const dataList = this.state.data.map((data, i) => <li className="list-group-item" key={'data_'+i}>
    <input type="checkbox" />
    {data.text}
    <span className="badge" ></span>
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
        <input type="text" onChange={this.handleChange}
        value={this.state.text}
        placeholder="Your Todo.."
        className="form-control"
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

import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import data from  './data.json';


class TodoApp extends React.Component{

  constructor(){
    super();
    this.state = {
      data:data.data
    };
  }

  handleClick = (e) => {
    const change = e.status == ""?"complete":"";
    e.status  = change
    this.setState({
      status : change
    });
  }

  render(){
    const dataList = this.state.data.map((data, i) => <li className="list-group-item" key={'data_'+i}>
    <input type="checkbox"  onClick={(e) => this.handleClick(data, e)} />
    {data.text}
    <span className="badge" >{data.status}</span>
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
        <label>Todo</label>
        <input type="text" placeholder="Your Todo.." className="form-control" id="usr" />
        <br />
        <button type="button" className="btn btn-default">
          Submit
        </button>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));

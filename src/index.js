import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';


class TodoApp extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[
        {id:0,text:"xyz", check:"false", status:""},
        {id:1,text:"abc", check:"false", status:""},
        {id:2,text:"123", check:"false", status:""}
      ]
    };
  }

  handleClick = (e) => {
    
    // const change = this.state.data.status == ""?"complete":"";
    // const checkit = this.state.data.check == "false"?"true":"false";
    // this.setState({
    //   status : change,
    //   check : checkit
    // });
  }

  render(){
    const dataList = this.state.data.map((data, i) => <li className="list-group-item" key={'text_'+i}>
    <input type="checkbox" check={data.check} onClick={this.handleClick(data.id)} />
    {data.text}
    <span className="badge" >{data.status}</span>
     </li>);
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

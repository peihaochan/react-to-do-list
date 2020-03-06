import React from 'react';
import './App.css';
import List from './components/List'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]

    });
  }


  // handleDelete = (itemToBeDeleted) => {
  //  console.log('items deleted')
  // }


  render() {
    return (
      <div>
        <h1>To-do</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input placeholder="Type item here...." value={this.state.term} onChange={this.onChange} />
          <div>
            <button className="AddButton">Add to To-Do List</button>
          </div>
        </form>
        <div>
          <List items={this.state.items}></List>
          {/* removeToDo={this.removeToDo} */}
        </div>
      </div>
    );
  }
}

export default App;

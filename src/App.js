import React, { Component } from 'react';
import './App.css';
import UsersList from './UsersList';
import ListForm from './ListForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [
       {
         name: 'Appu',
         age: 25
       }
      ]
    }
  }

  onAddUserList = (list) => {
    const users = this.state.usersList;
    const usersList = [...this.state.usersList, list];
    // const usersList = [];
    // usersList.push(list);
    // const allUsersList = users.concat(usersList);
    // this.setState({usersList: allUsersList});
    this.setState({usersList: usersList});
  }

  render() {
    return (
      <div className="App">
        <ListForm onAddUserList={this.onAddUserList}/>
        <UsersList usersList={this.state.usersList}/>
      </div>
    );
  }
}

export default App;

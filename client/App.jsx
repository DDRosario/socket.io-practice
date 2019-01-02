import React from 'react';
import UserForm from './components/UserForm';
import MessageForm from './components/MessageForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: '',
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e, option) {}
  handleSubmit(e, option) {}
  componentDidMount() {}
  render() {
    return (
      <span>
        <div>
          {this.state.loggedIn ? (
            <MessageForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            <UserForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          )}
        </div>
        <div>Chat</div>
        {this.state.messages.map((message, i) => {
          return (
            <span>
              <div>
                {message[0]} : {messsage[1]}
              </div>
            </span>
          );
        })}
      </span>
    );
  }
}

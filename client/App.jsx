import React from 'react';
import UserForm from './components/UserForm';
import MessageForm from './components/MessageForm';
import {
  joinChat,
  subscribeToChat,
  sendMessage,
  userDisconnected
} from './socketAPI';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
      user: '',
      description: '',
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
  }
  handleChange(e, option) {
    const update = {};
    update[option] = e.target.value;
    this.setState(update);
    e.preventDefault();
  }

  handleSubmitUser(e, option) {
    joinChat(msg => {
      this.setState({
        messages: [msg].concat(this.state.messages)
      });
    }, this.state.user);
    this.setState({ loggedIn: true });
    e.preventDefault();
  }

  handleSubmitMessage(e) {
    sendMessage(
      () => {
        this.setState({ message: '' });
      },
      this.state.user,
      this.state.message
    );
    e.preventDefault();
    e.target.reset();
  }

  componentDidMount() {
    userDisconnected(({ user, description }) => {
      this.setState({
        messages: [
          { user: 'SYSTEM', message: `${user} has disconnected from chat` }
        ].concat(this.state.messages),
        description: description
      });
    });
  }
  render() {
    return (
      <span>
        <div>
          {this.state.loggedIn ? (
            <MessageForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmitMessage}
            />
          ) : (
            <UserForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmitUser}
            />
          )}
        </div>
        <div>Chat</div>
        {this.state.messages.map((message, i) => {
          return (
            <span>
              <div>
                {message.user} : {message.message}
              </div>
            </span>
          );
        })}
      </span>
    );
  }
}

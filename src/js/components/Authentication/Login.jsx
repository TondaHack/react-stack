import React, { PropTypes } from 'react';
import { Cell, Textfield } from 'react-mdl';
import { connect } from 'react-redux';
import { login, todoList, registrate } from './../../actions/authentication';

class LoginForm extends React.Component {
  static propTypes = {
    auth: PropTypes.func.isRequired,
    // todoAll: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: 'user@user.com',
      password: 'user',
    };
  }

  onChangeUsername = (e) => {
    const username = e.target.username;

    this.setState({
      username,
    });
  };

  onChangePassword = (e) => {
    const password = e.target.password;

    this.setState({
      password,
    });
  };

  handleSubmit = () => {
    const { username = 'user@user.com', password = 'user' } = this.state;
    const { auth } = this.props;

    // registrate();
    auth(username, password);
    // todoAll();
  };

  render() {
    const { username, password } = this.state;

    return (
      <Cell col={12}>
        <Textfield
          type="text"
          onChange={this.onChangeUsername}
          value={username}
          onKeyDown={this.handleSubmit}
          label="Username"
        />
        <Textfield
          type="password"
          onChange={this.onChangePassword}
          value={password}
          onKeyDown={this.handleSubmit}
          label="Password"
        />

        <button onClick={this.handleSubmit}>Login</button>
        <button onClick={registrate}>Registrate</button>
      </Cell>
    );
  }
}


const dispatchTodo = dispatch => ({
  auth: (username, password) => login(dispatch, username, password),
  todoAll: () => todoList(),
});


export default connect(dispatchTodo)(LoginForm);

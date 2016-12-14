import React, { PropTypes } from 'react';
import { Cell, Textfield } from 'react-mdl';
import { connect } from 'react-redux';
import { login, registrate } from './../../actions/authentication';

class LoginForm extends React.Component {

  static propTypes = {
    auth: PropTypes.func.isRequired,
    registration: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
    const { username, password } = this.state;
    const { auth, router } = this.props;

    auth(username, password)
      .then(() => {
        router.replace('/');
      });
  };

  render() {
    const { username, password } = this.state;
    const { registration } = this.props;

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
        <button onClick={registration}>Registrate</button>
      </Cell>
    );
  }
}

const stateCreator = state => ({
  user: state.user,
});

const actionCreator = dispatch => ({
  auth: (username, password) => login(dispatch, username, password),
  registration: registrate,
});


export default connect(stateCreator, actionCreator)(LoginForm);

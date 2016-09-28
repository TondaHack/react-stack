import React, { PropTypes } from 'react';
import { Cell, Textfield } from 'react-mdl';

export default class AddItem extends React.Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      value,
    });
  };

  handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const { add } = this.props;
      const { value } = this.state;

      add(value);
      this.setState({
        value: '',
      });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <Cell col={12}>
        <Textfield
          type="text"
          onChange={this.onChange}
          value={value}
          onKeyDown={this.handleSubmit}
          label="New Item"
        />
      </Cell>
    );
  }
}


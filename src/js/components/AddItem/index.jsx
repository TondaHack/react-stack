import React from 'react';

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    onChange = (e) => {
        const value = e.target.value;

        this.setState({
            value
        });
    };

    handleSubmit = (e) => {
        if (e.keyCode === 13) {
            const {add} = this.props;
            const {value} = this.state;

            add(value);
            this.setState({
                value: ''
            });
        }
    };

    render() {
        const {value} = this.state;

        return (
            <div>
                <input
                    type='text'
                    onChange={this.onChange}
                    value={value}
                    className='form-control'
                    placeholder='New Item'
                    onKeyDown={this.handleSubmit}
                />
            </div>
        );
    }
}


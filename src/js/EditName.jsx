import React,{Component} from 'react';

export default class EditName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    changePersonName = () => {
        const {changeName} = this.props;
        const {name} = this.state;

        changeName(name);
        this.setState({
            name: ''
        });
    };

    render() {
        const {name} = this.state;
        const {changeName} = this.props;

        return (
            <div>
                <div>
                    Preview: {name}
                </div>
                <br/>
                <input
                    value={name}
                    onChange={this.onChangeName}
                />
                <button onClick={this.changePersonName}>Change name</button>
            </div>
        );
    }
}
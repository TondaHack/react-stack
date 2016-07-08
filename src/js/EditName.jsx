import React,{Component} from 'react';

export default class EditUserName extends Component {
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

        if(name.length > 0) {
            changeName(name);
            this.setState({
                name: ''
            });
        }
    };

    render() {
        const {name} = this.state;

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
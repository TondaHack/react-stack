import React from 'react';
import ReactDOM from  'react-dom';


export default class Component extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return (
          <div>
              test 2
          </div>
        );
    }
}


ReactDOM.render((<Component/> ), document.getElementById('root'));
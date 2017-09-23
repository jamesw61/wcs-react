import React, {Component} from 'react'
import Menu from './Menu'
import {Link} from 'react-router'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {loggedin: false}
        this.data = 'some data'
        // this is needed to bind 'this' to each function to use 'this'
        this.onClick = this.onClick.bind(this);
    }
      onClick(bool){
          this.setState({ loggedin: bool })
      }
    render() {
        console.log(this.props)
        // condition to add props based on what component is coming in 
        const props = {
            onClick: this.onClick
        }
        const content = (this.props.children) ? React.cloneElement(this.props.children, props) : null;
        return (
            <div className="container-fluid main">
                <Menu loggedin={this.state.loggedin} />

                <div className="container-fluid main">
                    <br/> {content}
                </div>
            </div>

        )
    }
}

export default Main;

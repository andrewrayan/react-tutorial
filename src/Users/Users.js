import React, { Component } from 'react';

class UserComponent extends Component {
    state = {
        user: {
            firstName: 'Andrew',
            lastName: 'Rayan'
        }
    }

    changeName = () => {
        const user = {
            user: {
                firstName: 'Beslin',
                lastName: 'Pajila'
            }
        }
        this.setState(user);
    }
    render() {
        return (<div>
            Welcome {this.state.user.firstName} {this.state.user.lastName}!
            <button onClick={this.changeName}>Change()</button>
        </div >
        );
    }

}

export default UserComponent;
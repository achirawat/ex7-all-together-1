import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
    state = {
        user: {
           firstname: '',
           lastname: '',
           username: '',
        },
        userExists: false,
    };

    connectExists = currentUsername => {
        const users = this.props.users;
        for (let user of users) {
            if (user.username === currentUsername) {
                return true;
            }
        }
        return false;
    };

    handleSubmit = event => {
        event.preventDefault();
        const userExists = this.connectExists(this.state.user.username);

        if (!userExists) {
            this.props.onAddUser(this.state.user);
        }

        this.setState(() => ({userExists}));
    };

    handleInput = event => {
        const {name, value} = event.target;
        this.setState(currentState => ({...currentState, users: {...currentState.user, [name]: value,}}));
    };

    disable = () => {
        const {firstname, lastname, username} = this.state.user;
        return (firstname === '' || lastname === '' || username === '');
    };

    render() {
        const {firstname, lastname, username} = this.state.user;
        return(
            <div>
                <h1>New User</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" name="firstname" placeholder="Enter First Name" value={firstname} />
                        <input type="text" name="lastname" placeholder="Enter Last Name" value={lastname} />
                        <input type="text" name="username" placeholder="Enter User Name" value={username} />
                        <button disabled={this.disable()}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default AddUser;
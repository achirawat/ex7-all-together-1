import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
    state = {};
    render() {
        const {users} = this.props;
        return(
            <div>
                <h1>Users</h1>
            </div>
        );
    }
}

export default UserList;
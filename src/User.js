import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
    return (
        <li className="user">
            <p>Username: {props.user.username}</p>
        </li>
    );
}

User.propTypes = {
    user: PropTypes.object.isRequired,
};

export default User;
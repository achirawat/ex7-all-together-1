import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
    state = {
        showGamesPlayed: true,
    };
    toggleGamesPlayed = () => {
        this.setState(oldState => ({
            showGamesPlayed: !oldState.showGamesPlayed,
        }));
    };
    render() {
        const {users} = this.props;
        const {showGamesPlayed} = this.state;
        const gamesButton = (
            <div>
                <button className="smallButton" onClick={this.toggleGamesPlayed}>
                {showGamesPlayed ? 'Hide' : 'show'}
                    the Number of Games Played
                </button>
            </div>
        );
        return(
            <div>
                <h1>Users</h1>
                {users && users.length > 0 ? gamesButton : ''}
                <ol>
                    {users.map(user => (
                        <User key={user.username} user={user} showGamesPlayed={showGamesPlayed}/>
                    ))}
                </ol>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
};

export default UserList;
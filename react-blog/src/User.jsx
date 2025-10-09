// more about props (advance props )

import PropTypes from 'prop-types';

function User({name="New User"}){
    return (
        <div>
            <h1>User Component ,{name}</h1>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;
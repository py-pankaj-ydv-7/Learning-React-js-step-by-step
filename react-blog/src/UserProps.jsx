import PropTypes from 'prop-types';

function User(props){
    // console.log(props.name);
    return (
        <div>
            <h1>User Component</h1>
            <h2>{props.name}</h2>

        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired
};

export default User;
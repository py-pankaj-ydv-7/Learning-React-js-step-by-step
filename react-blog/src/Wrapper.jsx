

import PropTypes from 'prop-types';

function Wrapper({children}) {
  return (
    <div style={{color:"green", border:"5px solid green", width:300}}>
        {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper
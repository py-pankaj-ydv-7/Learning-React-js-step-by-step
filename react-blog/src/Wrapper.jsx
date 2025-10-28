

import PropTypes from 'prop-types';

function Wrapper({children,color="green", width="300px"}) {
  // me isme me props k through width bhi pass kr sakta hu , jese ki mene abhi ki hai yaha use width 
  return (
    <div style={{color:color, border:"2px solid green",paddingLeft:"15px", width:width,  margin:"10px"}}>
      
        {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper
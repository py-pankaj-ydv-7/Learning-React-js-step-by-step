

import PropTypes from 'prop-types';

function Wrapper({children,color="green"}) {
  return (
    <div style={{color:color, border:"2px solid green",paddingLeft:"15px" , width:300, margin:"10px"}}>
      
        {children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper
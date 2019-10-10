import React from 'react'
import PropTypes from 'prop-types';

const Imagebox = ({addType,filter}) => {
  return (
    <>
      <div className="box">
        <ul>
          <li onClick={()=>{filter('profile')}}><span className="text-big">Profile Pictures Album</span></li>
          <li onClick={()=>{filter('cover')}}><span className="text-big">Cover Pictures Album</span></li>
          <li onClick={()=>{filter('future')}}><span className="text-big">Future Pictures Album</span></li>
          <li onClick={addType}><a ><i className="fa fa-plus" aria-hidden="true"></i></a></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
          <li><span>Will be same Other section</span></li>
        </ul>
      </div>
      <div className="clear-all"></div>
    </>
  )
}

Imagebox.propTypes = {
  filter : PropTypes.func,
  addType: PropTypes.func,

}

export default Imagebox;

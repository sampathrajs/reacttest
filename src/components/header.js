import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ButtonDropdown,
  DropdownMenu,
  DropdownItem, DropdownToggle
} from 'reactstrap';

const Header = ({ privacy }) => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="title-box">
      <ul>
        <li><span><i className="fa fa-pencil" aria-hidden="true"></i></span></li>
        <li><span><i className="fa fa-users" aria-hidden="true"></i></span>Pictures 100</li>
        <li>
          <ButtonDropdown
            isOpen={isOpen}
            toggle={() => {
              setIsOpen(!isOpen);
            }}
            direction="left">
            <DropdownToggle className="privacy-btn">
              <span><i className="fa fa-globe" aria-hidden="true"></i></span>
            </DropdownToggle>
            <DropdownMenu className="privacy-menu">
              <DropdownItem onClick={()=>{privacy('public')}}>public</DropdownItem>
              <DropdownItem onClick={()=>{privacy('private')}}>private</DropdownItem>
              <DropdownItem onClick={()=>{privacy('friends')}}>friends</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown></li>
      </ul>
    </div>
  )
}

Header.propTypes = {
  privacy: PropTypes.func,

}

export default Header;
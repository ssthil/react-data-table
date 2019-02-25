import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title, className }) => <div className={className}>{title} </div>;

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string
};

export default Header;

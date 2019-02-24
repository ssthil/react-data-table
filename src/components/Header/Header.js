import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title }) => <h2 className="title">{title} </h2>;

Header.propTypes = {
  title: PropTypes.string
};

export default Header;

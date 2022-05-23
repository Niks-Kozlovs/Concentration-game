import React from 'react'
import PropTypes from 'prop-types'

import './style.scss';

const BurgerMenuButton = ({ onToggle, isOpen }) => {
    return (
        <button
            className={`burger-menu-button ${isOpen ? 'open' : ''}`}
            onClick={() => onToggle()}
        >
            <span />
            <span />
            <span />
        </button>
    )
}

BurgerMenuButton.propTypes = {
    onToggle: PropTypes.func.isRequired,
    isOpen: PropTypes.bool
}

BurgerMenuButton.defaultProps = {
    isOpen: false
}

export default BurgerMenuButton
import React from 'react'
import PropTypes from 'prop-types';
import cs from 'classnames';

const SectionTitle = ({className, children}) => (
    <h3 className={cs(className, 'section-title')}>{children}</h3>
);

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default SectionTitle;
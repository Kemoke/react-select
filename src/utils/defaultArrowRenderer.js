import React from 'react';
import PropTypes from 'prop-types';

const arrowRenderer = ({ onClick }) => {
	return (
		<span
			className="Select-arrow"
			onClick={onClick}
		/>
	);
};

arrowRenderer.propTypes = {
	onMouseDown: PropTypes.func,
};

export default arrowRenderer;

import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

function LanguageToggler(props) {
	const { onClick } = props;

	const handleClick = (lang, language) => {
		language.setLanguage(lang);
		onClick();
	};

	return (
		<AppContext.Consumer>
			{(values) => (
				<ButtonGroup size='sm' className='ms-2 mb-1'>
					<Button
						variant={values.language.value === 'es' ? 'primary' : 'outline-secondary'}
						onClick={() => handleClick('es', values.language)}
					>
						ES
					</Button>
					<Button
						variant={values.language.value === 'en' ? 'primary' : 'outline-secondary'}
						onClick={() => handleClick('en', values.language)}
					>
						EN
					</Button>
				</ButtonGroup>
			)}
		</AppContext.Consumer>
	);
}

LanguageToggler.propTypes = {
	onClick: PropTypes.func,
};

LanguageToggler.defaultProps = {
	onClick: () => {},
};

export default LanguageToggler;

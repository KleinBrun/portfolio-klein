import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
	introTextContainer: {
		margin: 10,
		flexDirection: 'column',
		whiteSpace: 'pre-wrap',
		textAlign: 'left',
		fontSize: '1.2em',
		fontWeight: 500,
	},
	introImageContainer: {
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
	},
};

function About(props) {
	const { header } = props;
	const [data, setData] = useState({
		about: '¡Hola! Soy un apasionado ingeniero de sistemas con más de 3.5 años de experiencia, enfocado principalmente en el desarrollo utilizando JavaScript y PHP.\n Además, cuento con sólidos conocimientos en C# y Java. Mi entusiasmo por aprender se refleja en mi dedicación activa al estudio del inglés.\n\nSoy un profesional aplicado y detallista, características que llevo a cada tarea diaria. Mi experiencia se ha centrado en la resolución creativa de problemas y el desarrollo de soluciones eficientes. En mi tiempo libre, disfruto yendo al gimnasio para mantener un equilibrio saludable y soy un apasionado del baloncesto.\nEstoy comprometido con el crecimiento continuo y la excelencia en mi trabajo.\n¡Estoy abierto a nuevas oportunidades que me permitan seguir creciendo laboralmente!',

		imageSource: 'public/images/about/yo.png',
	});

	const parseIntro = (text) => <ReactMarkdown children={text} />;

	useEffect(() => {
		// fetch(endpoints.about, {
		//   method: 'GET',
		// })
		//   .then((res) => res.json())
		//   .then((res) => setData(res))
		//   .catch((err) => err);
	}, []);

	return (
		<>
			<Header title={header} />
			<div className='section-content-container'>
				<Container>
					{data ? (
						<Fade>
							<Row>
								<Col style={styles.introTextContainer}>
									{parseIntro(data.about)}
								</Col>
								<Col style={styles.introImageContainer}>
									<img
										src={data?.imageSource}
										alt='profile'
									/>
								</Col>
							</Row>
						</Fade>
					) : (
						<FallbackSpinner />
					)}
				</Container>
			</div>
		</>
	);
}

About.propTypes = {
	header: PropTypes.string.isRequired,
};

export default About;

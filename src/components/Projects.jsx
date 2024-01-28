import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

const styles = {
	containerStyle: {
		marginBottom: 25,
	},
	showMoreStyle: {
		margin: 25,
	},
};

const Projects = (props) => {
	const theme = useContext(ThemeContext);
	const { header } = props;
	const [data, setData] = useState({
		projects: [
			{
				image: 'images/projects/lobby.png',
				title: 'Hoteleria',
				bodyText:
					'- Sitio web de gestion y reserva de hoteles\n- Crud de contendio hotelera y reservas en BD',
				links: [
					{
						text: 'GitHub',
						href: 'https://github.com/KleinBrun/Lobby',
					},
				],
				tags: ['Vue', 'Laravel', 'MySql'],
			},
			{
				title: 'Blog',
				bodyText:
					'- Blog de informacion\n- Con sistema de registro\n- Crud de contendio',
				links: [
					{
						text: 'GitHub',
						href: 'https://github.com/KleinBrun/proyectoblog',
					},
				],
				tags: ['React', 'PHP', 'MySql'],
			},
			{
				title: 'Ordenes De Servicio',
				bodyText:
					'- Registro de equipos recibidos\n- Factura de recivido  y entregado con infomacion del equipo y el servicio\n- Estado del producto',
				links: [],
				tags: ['Java', 'MySql'],
			},
		],
	});
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		// fetch(endpoints.projects, {
		//   method: 'GET',
		// })
		//   .then((res) => res.json())
		//   .then((res) => setData(res))
		//   .catch((err) => err);
	}, []);
	const numberOfItems = showMore && data ? data.length : 6;
	return (
		<>
			<Header title={header} />
			{data ? (
				<div className='section-content-container'>
					<Container style={styles.containerStyle}>
						<Row xs={1} sm={1} md={2} lg={3} className='g-4'>
							{data.projects
								?.slice(0, numberOfItems)
								.map((project) => (
									<Fade key={project.title}>
										<ProjectCard project={project} />
									</Fade>
								))}
						</Row>

						{!showMore && (
							<Button
								style={styles.showMoreStyle}
								variant={theme.bsSecondaryVariant}
								onClick={() => setShowMore(true)}
							>
								show more
							</Button>
						)}
					</Container>
				</div>
			) : (
				<FallbackSpinner />
			)}
		</>
	);
};

Projects.propTypes = {
	header: PropTypes.string.isRequired,
};

export default Projects;

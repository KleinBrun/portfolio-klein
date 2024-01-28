import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
	iconStyle: {
		height: 75,
		width: 75,
		margin: 10,
		marginBottom: 0,
	},
	introTextContainer: {
		whiteSpace: 'pre-wrap',
	},
};

function Skills(props) {
	const { header } = props;
	const [data, setData] = useState({
		intro: 'I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with:',
		skills: [
			{
				title: 'Languages & Databases',
				items: [
					{
						icon: 'images/skills/php.png',
						title: 'PHP',
					},
					{
						icon: 'images/skills/js.png',
						title: 'JavaScript',
					},
					{
						icon: 'images/skills/java.png',
						title: 'Java',
					},
					{
						icon: 'images/skills/csharp.png',
						title: 'C#',
					},
					{
						icon: 'images/skills/html.png',
						title: 'HTML',
					},
					{
						icon: 'images/skills/ibm.jpeg',
						title: 'IBM',
					},
					{
						icon: 'images/skills/sqlserver.png',
						title: 'SQL Server',
					},
					{
						icon: 'images/skills/mysql.png',
						title: 'MySql',
					},
					{
						icon: 'images/skills/oracle.png',
						title: 'Oracle',
					},
					{
						icon: 'images/skills/postgresql.png',
						title: 'PostgreSQL',
					},
				],
			},
			{
				title: 'Frameworks & Technologies',
				items: [
					{
						icon: 'images/skills/react.png',
						title: 'React',
					},
					{
						icon: 'images/skills/redux.png',
						title: 'Redux',
					},
					{
						icon: 'images/skills/nodejs.png',
						title: 'Nodejs',
					},
					{
						icon: 'images/skills/laravel.png',
						title: 'Laravel',
					},
					{
						icon: 'images/skills/yii2.png',
						title: 'YII2',
					},
					{
						icon: 'images/skills/springboot.png',
						title: 'SpringBoot',
					},
					{
						icon: 'images/skills/vue.png',
						title: 'Vue',
					},
				],
			},
			{
				title: 'Tools & Platforms',
				items: [
					{
						icon: 'images/skills/vscode.webp',
						title: 'VsCode',
					},
					{
						icon: 'images/skills/git.png',
						title: 'Git',
					},
					{
						icon: 'images/skills/netbeans.png',
						title: 'NetBeans',
					},
				],
			},
		],
	});

	const renderSkillsIntro = (intro) => (
		<h4 style={styles.introTextContainer}>
			<ReactMarkdown children={intro} />
		</h4>
	);

	useEffect(() => {
		// fetch(endpoints.skills, {
		//   method: 'GET',
		// })
		//   .then((res) => res.json())
		//   .then((res) => setData(res))
		//   .catch((err) => err);
	}, []);

	return (
		<>
			<Header title={header} />
			{data ? (
				<Fade>
					<div className='section-content-container'>
						<Container>
							{renderSkillsIntro(data.intro)}
							{data.skills?.map((rows) => (
								<div key={rows.title}>
									<br />
									<h3>{rows.title}</h3>
									{rows.items.map((item) => (
										<div
											key={item.title}
											style={{ display: 'inline-block' }}
										>
											<img
												style={styles.iconStyle}
												src={item.icon}
												alt={item.title}
											/>
											<p>{item.title}</p>
										</div>
									))}
								</div>
							))}
						</Container>
					</div>
				</Fade>
			) : (
				<FallbackSpinner />
			)}
		</>
	);
}

Skills.propTypes = {
	header: PropTypes.string.isRequired,
};

export default Skills;

import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push('./');
		}
		// console.log(location.state.medium_cover_image);
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return (
				<div className='detail__container'>
					<h1>{location.state.title}</h1>
					<h3>{location.state.year}</h3>
					<h3>{location.state.genres}</h3>
					<p>{location.state.summary}</p>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Detail;

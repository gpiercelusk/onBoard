import React, { Component } from 'react';
import { Input, FormBtn } from "./SampleForm";
import Modal from "./Modal"
import GoogleMaps from './GoogleMaps'
import axios from 'axios'

class MapSearch extends Component {

	state = {
		addressSearch: '',
		address: '',
		lat: '',
		lng: '',
		addEvent: '',
		nameOfEvent: '',
		geoCode: {},
		isOpen: false
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.setState({ address: this.state.addressSearch })
		this.setState({ nameOfEvent: this.state.addEvent })
		this.callGeocode();
		this.clearSearch();
	}

	clearSearch = () => this.setState({ addressSearch: "", addEvent: "" });

	

	callGeocode = () => {
		console.log("callGeocode is being used");
		let location = this.state.addressSearch;
		let self = this;
		const gApi = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
		console.log("This address is being used" + location)

		axios.get('https://maps.googleapis.com/maps/api/geocode/json', {

			params: {
				address: location,
				key: gApi
			}
		})
			.then(function (response) {
				console.log(response);
				console.log(response.data.results[0].formatted_address);
				let lat = response.data.results[0].geometry.location.lat;
				let lng = response.data.results[0].geometry.location.lng;
				self.setState({ geoCode: { lat: lat, lng: lng } })
				self.setState({ lat: lat });
				self.setState({ lng: lng });
				self.setState({ address: response.data.results[0].formatted_address });
			}).catch(function (error) {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
				<div className="App">
					<button onClick={(e) => this.setState({ isOpen: true })}>Open Map</button>
					<Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
						<GoogleMaps
							address={this.state.address}
							event={this.state.nameOfEvent}
							lat={this.state.lat}
							lng={this.state.lng}
							{...this.state.geoCode} />
					</Modal>
				</div>

				<Input
					value={this.state.addressSearch}
					name="addressSearch"
					onChange={this.handleInputChange}
					type="text"
					placeholder="Address"
				/>
				<Input
					value={this.state.addEvent}
					name="addEvent"
					onChange={this.handleInputChange}
					type="text"
					placeholder="Event Name"
				/>
				<FormBtn
					disabled={!(this.state.addressSearch)}
					onClick={this.handleFormSubmit}
				>
					Search
                </FormBtn>
			</div>
		);
	}
}

export default MapSearch;
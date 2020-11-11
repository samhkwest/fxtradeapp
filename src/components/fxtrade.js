import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class FxTrade extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			fxTrade: []
		}

		this.callApi = this.callApi.bind(this);
	};

	callApi(){
		const fxtradeapi_url = "http://localhost:8080/fxtrade/trades";		
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		};

		fetch(fxtradeapi_url, requestOptions)
			.then(response => response.json())
			.then(result => this.setState({fxTrade: result}))
			.catch(error => {
				this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	}

	refreshFxTradesTbl(e) {
		this.callApi();
	}
	componentDidMount() {
		this.callApi();
	}

	render() {		
		return (	
		<html>
			<div>
				<table>
				<thead>
				<tr>
					<th>Id</th>
					<th>User ID</th>
					<th>Sell CCY</th>
					<th>Sell Amount</th>
					<th>Buy CCY</th>
					<th>Buy Amount</th>
					<th>FX Rate</th>
					<th>Placed At</th>
					<th>Orig. Country</th>					
				</tr>
				</thead>
				<tbody>
				{this.state.fxTrade.map((data, key) => {
					return (
						<tr key={key}>
						<td>{data.id}</td>
						<td>{data.usrid}</td>
						<td>{data.sellccy}</td>
						<td>{data.sellamt}</td>
						<td>{data.buyccy}</td>
						<td>{data.buyamt}</td>
						<td>{data.fxrate}</td>
						<td>{data.messagets}</td>
						<td>{data.origctry}</td>
						</tr>
					);}
				)}
				</tbody>
				</table>
				<br/>
				<button type="button" onClick={(e) => this.refreshFxTradesTbl(e)}>Refresh</button>
			</div>
		</html>

		);
	}
	
}

export default FxTrade;
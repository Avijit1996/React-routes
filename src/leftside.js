import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./leftside.css";
function home(){
	return(
		<h1>Home</h1>
	);

}
function Approuter(){
	return(
						<div>
							<Router>				
							<Route path="/home/" exact component={home} />
							</Router>
						</div>

		);
}

export default class Leftside extends React.Component{
	constructor(props){
		super(props);
		this.select = React.createRef();
		this.state = {
			option:'',
			optiontoggle:false
		}
	}
	componentDidMount(){
		
	}
	optionChange = (event) => {
		this.setState({
			optiontoggle:true,
			option:event.target.value
		})
		
	}
	render(){
		if(this.state.optiontoggle === true){
			window.location.pathname = this.state.option;
		}																																																			
		
	return(
		
		
		<div className = "sidenav">
		<nav>
	   		<ul>
	   			<li><a href="/home/">Home</a></li>
	   		</ul>
	   		  <select value={this.state.option} id="select" onChange={this.optionChange}>
				<option>Birds List</option>																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						
				<option value="IndianRoller">Indian Roller</option>
			    <option value="CommonKingfisher">Common Kingfisher</option>
			    <option value="BlackDrongo">Black Drongo</option>
			    <option value="CommonKingfisher">Laughing Dove</option>
			    <option value="RainbowLorikeet">Rainbow Lorikeet</option>
			  </select>
	   </nav>
	   </div>
		
	);
	
	}
}

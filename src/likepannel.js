import React from 'react';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import FavoriteborderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import "./likepannel.css";
export default class Like extends React.Component{
	constructor(props){
		super(props);
		localStorage.setItem('test', 1);
		this.state = {
			clickcount:0,
			changeicon:false,
			messageclick:false
		}
	}
  iconhandler = () => {

  	this.setState({
  		clickcount: this.state.clickcount + 1,
  		changeicon: !this.state.changeicon
  	}) 
  }
  message = () => {
  	this.setState({
  		messageclick:!this.state.messageclick
  	})
  	
  	}
  	render(){
		return(
			<div>
				<table className="like">
					<tbody>
						<tr>
							<td>
								<a onClick={this.iconhandler}>
									{
										this.state.changeicon
										? <FavoriteIcon style={{color:'red'}} />
										: <FavoriteborderIcon />
									}
									
								</a>

							</td>
							<td><MessageIcon onClick={this.message} />
									
							</td>
							<td><ShareIcon /></td>
						</tr>
						<tr>
							<td>{this.state.clickcount}</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<table>
					<tbody>
						<tr>
							{
										this.state.messageclick 
  										? <div>
								  				 <TextField
											          label="Comment"
											          multiline
											          rowsMax="4"
											  		  margin="normal"
								       			 />
								  			</div>
								  		
								  	  : null
							}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
export default class Userprofile extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			username:'',
			password:'',
			usersection:false
		}
	}
	login = () => {
		this.setState({
			usersection:true
		})
		
	}
	handleinput = (event) =>{
		let name = event.target.name;

		this.setState({
			[name]:event.target.value
		})
	}
	handleClose = () => {
		this.setState({
			usersection:false
		})
	}
	handledialog = () =>{
		this.setState({
			usersection:false
		})	
	}
	
	render(){
	  return(
		<div>
			<Button variant="contained" color="primary" 
				onClick={this.login}
			    style={{float:'right',marginRight:'10px'}}
			>
		    Login
			</Button>
				<div style={{float:'right',marginTop:'44px'}}> 
				<p style={{marginRight: '-47px'}}>welcome {this.state.username}! </p>
				</div>
				<Dialog
				open={this.state.usersection}
			    onClose={this.handleClose}
			    aria-labelledby="form-dialog-title"
				>
				<DialogTitle>Login Form</DialogTitle>
		        <DialogContent>
		            <form>
		            	<TextField
		            	 	 autoFocus
			            	 required
			            	 onChange={this.handleinput}
			            	 name="username"
			            	 type="text"
			         		 label="User Name"
			          		 margin="dense"
		        		/>
		        		<br />
		        		<TextField
		        			 required
		        			 type="password"
		        			 onChange={this.handleinput}
		        			 name="password"
			         		 label="Password"
			          		 margin="dense"
		        		/>
		            	<br />
		            	<DialogActions>
		            		<Button color="primary" onClick={this.handledialog}>Submit</Button>
		            	</DialogActions>
		            </form>   	
		         <DialogContentText>
		              **Please fill up the Login form
		         </DialogContentText>
		       </DialogContent>
		     </Dialog>
		</div>
		);
	}







}
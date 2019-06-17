import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Joinus extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstname:'',
			middlename:'',
			lastname:'',
			email:'',
			open:false
		}
	}
	handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  subscibe = () => {
    this.setState({ 
    	open:false
    });
    
  };
  handleinput =(event) => {
  	let name = event.target.name;
  	let value = event.target.value;
  	this.setState({
  		[name]:value
  	})
  }

	render(){
		return(
	<div>
		<center>
			<Button variant="contained" color="primary" 
				style={{ marginLeft: '200px'}}
				onClick={this.handleClickOpen}
			>
		    Join us
       		</Button>
       		</center>
       		<Dialog
	          open={this.state.open}
	          onClose={this.handleClose}
	          aria-labelledby="form-dialog-title"
	        >
      <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
              To subscribe to this website, please enter your form here.
          </DialogContentText>
            <form>
            	<TextField
            	 	 autoFocus
	            	 required
	            	 onChange={this.handleinput}
	            	 name="firstname"
	            	 type="text"
	         		 label="First Name"
	          		 margin="dense"
        		/>
        		<br />
        		<TextField
        			 type="text"
        			 onChange={this.handleinput}
        			 name="middlename"
	         		 label="Middle Name"
	          		 margin="dense"
        		/>
        		<br />
        		<TextField
	        		 required
	        		 type="text"
	        		 onChange={this.handleinput}
	        		 name="lastname"
	         		 label="Last Name"
	          		 margin="dense"
        		/>
        		<br />
        		<TextField
	              	required
	              	onChange={this.handleinput}
	              	margin="dense"
	              	name="email"
	              	label="Email Address"
	              	type="email"
	              	
            	/>
            	<br />
            	<DialogActions>
            		<Button onClick={this.subscibe} color="primary">Subscribe</Button>
            		<Button onClick={this.handleClose} color="primary">Cancel</Button>
            	</DialogActions>
         </form>   	
       </DialogContent>
     </Dialog>

       		 </div>
		
		);
	}
	

}
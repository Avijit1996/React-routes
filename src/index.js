import React from 'react';
import ReactDOM from 'react-dom';
import Birds from './bird_list';
import Leftside from './leftside';
import Dogs from './dogs_list';
import Joinus from './joinus';
import Userprofile from './userprofile';
class App extends React.Component{
	render(){
		return(
				
			<div>	
				<Leftside />
				<Userprofile />
				<Birds />
				<Joinus />
			</div>
			  		
			);
	}
	
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
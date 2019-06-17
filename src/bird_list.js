import React from 'react';
import Like from './likepannel';
import ImageIndianRoller1 from './Assests/images/index.jpeg';
import ImageIndianRoller2 from './Assests/images/index11.jpeg';
import ImageIndianRoller3 from './Assests/images/index12.jpeg';
import ImageCommonKingfisher from './Assests/images/index1.jpeg';
import ImageBlackDrongo from './Assests/images/index2.jpeg';
import ImageLaughingDove from './Assests/images/index3.jpeg';
import ImageRainbowLorikeet from './Assests/images/index4.jpeg';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import "./bird_list.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
function IndianRoller(){
	let picindianroller = [ImageIndianRoller1,ImageIndianRoller2,ImageIndianRoller3];
	const name = picindianroller.map( (nameIndianRoller,index) => {
			return(

				<div>
				
					<img src= {nameIndianRoller} alt="ImageIndianRoller" style={{ width: '300px',height: '250px'}}/>
							
				</div>

			);
			
		})
		
	return(

		<div>

			<table>
					<tbody>
						<tr>
							<td>
								{name}
							</td>
						</tr>
					</tbody>	
				</table>
				<Like />
			<center>
			<b>Indian roller</b><br/>
			
			<p style={{ color:'blue'}}>
				The Indian roller is a member of the roller bird family.<br /> 
				It occurs widely from West Asia to the Indian Subcontinent and Sri Lanka.<br /> 
				It is listed as Least Concern on the IUCN Red List.<br />
				It is best known for its aerobatic displays of males during the breeding season.
			</p>
			</center>
			
		</div>
		);
}
function Commonkingfisher(){
	return(
		<div>
			<img src= {ImageCommonKingfisher} alt="ImageCommonKingfisher" />
			<Like />
			<center>
			<b>Common kingfisher</b><br/>
			<p>
				The common kingfisher also known as the Eurasian kingfisher,<br />
				and river kingfisher, is a small kingfisher with seven <br />
				subspecies recognized within its wide distribution across <br />
				Eurasia and North Africa. It is resident in much of its range, <br />
				but migrates from areas where rivers freeze in winter
			</p>
			</center>
		</div>
		);
}
function BlackDrongo(){
	return(
		<div>
			<img src= {ImageBlackDrongo} alt="ImageBlackDrongo" />
			<Like />
			<center>
			<b>Black Drongo</b><br/>
			<p style={{bgcolor:'black',fontColor:'white'}}>
				The black drongo is a small Asian passerine bird of <br />
				the drongo family Dicruridae. It is a common resident <br />
				breeder in much of tropical southern Asia from southwest <br />
				Iran through India and Sri Lanka east to southern China <br />
				and Indonesia.
			</p>
			</center>
		</div>
		);
}	
function LaughingDove(){
	return(
		<div>
			<img src= {ImageLaughingDove} alt="ImageLaughingDove" />
			<Like />
			<center>	
			<b>Laughing Dove</b><br/>
			<p>
				The laughing dove is a small pigeon that is a <br/>
				resident breeder in Africa, the Middle East and <br/>
				the Indian Subcontinent. This small long-tailed <br/>
				dove is found in dry scrub and semi-desert habitats <br/>
				where pairs can often be seen feeding on the ground.
			</p>
			</center>
		</div>
		);
}
function RainbowLorikeet(){
	return(
		<div>
			<img src= {ImageRainbowLorikeet} alt="ImageRainbowLorikeet" />
			<Like />
			<center>
			<b>Rainbow Lorikeet</b><br/>
			<p>
				
				The rainbow lorikeet is a species of parrot found <br />
				in Australia. It is common along the eastern seaboard,<br />
				from northern Queensland to South Australia. Its <br />
				habitat is rainforest, coastal bush and woodland areas.<br />
				Several taxa traditionally listed as subspecies of the <br />
				rainbow lorikeet are now treated as separate species.
			</p>
			</center>
		</div>
		);
}	

function Approuter(){
	return(
						<div>
							<Router>																																				
							
							<Route path="/IndianRoller/" exact component={IndianRoller} />
							<Route path="/Commonkingfisher/"  component={Commonkingfisher} />
							<Route path="/BlackDrongo/" component={BlackDrongo} />
							<Route path="/LaughingDove/" component={LaughingDove} />
							<Route path="/RainbowLorikeet/" component={RainbowLorikeet} />
							
							</Router>
						</div>

		);
}
export default class Birds extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			names:['IndianRoller','CommonKingfisher','BlackDrongo','LaughingDove','RainbowLorikeet'],
			namebird: '',
			addname:[],
			file:'',
			nextbirdindex: '',
			selectedfile:null,
			prevbirdindex: ''
		}
	}
componentDidMount() {
	let url = window.location.pathname.slice(1);
	let index = this.state.names.indexOf(url)
	
	for(var i=0;i < this.state.names.length;i++){
		if( this.state.names[i] === url){
			
				this.setState( (prevState) => ({
					nextbirdindex:index + 1,
					prevbirdindex:index - 1
					
				}))
		}
	}
}
filehandler =(event) =>{
	let file = event.target.files[0];
	this.setState({
		selectedfile:file
	})
}
uploadhandler = (event) => {
	
	const file = {
		name:this.state.selectedfile.name,
		type:this.state.selectedfile.type	
	}
	console.log(file)
	const myObjStr = JSON.stringify(file);
	console.log(myObjStr)
	 localStorage.setItem(event.target.name,myObjStr);
	 let save = localStorage.getItem('savefile');
	 let myObjJson = JSON.parse(save);
	 console.log(myObjJson.name)								

	 
	 
}
addbirdsubmit = (event) =>{
	event.preventDefault()
	const a = this.state.addname
			this.setState({
				addname:'',
				names:[...this.state.names,a]
			})
	

}
addbirdname = (event) =>{
		this.setState({
			addname:[event.target.value]
		})
}
next = (event) =>
{	event.preventDefault()
	if(this.state.nextbirdindex === this.state.names.length){
		
		window.location.pathname = this.state.names[0];
	}
	else{
		window.location.pathname = this.state.names[this.state.nextbirdindex];
	}
}
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																													
prev = () => 
{
	
	if(this.state.prevbirdindex < 0 )
	{
		window.location.pathname = this.state.names[this.state.names.length -1];
	}
	else{
		window.location.pathname = this.state.names[this.state.prevbirdindex];	
	}
	
	
}
	render(){
		
		const birdName = this.state.names.map( (bird,index) =>{
				
				
					return(
					<div style={{width:'200px', margin:'0 auto'}}>
						<li key={index} style={{textAlign:'left',textDecoration:'none'}}><a href={bird}>{bird}</a></li>
																																																																																																																																																		</div>
						  );
				});
		return(
			<div>
				<center>
					<h1 style={{ color:'red'}}><u>BIRDS LIST</u></h1>
					<form onSubmit={this.addbirdsubmit}>
					<span className="p-float-label">
				 		<InputText id="in" placeholder="Add bird" onChange={this.addbirdname} value={this.state.addname} />				 		
				 	</span>
				 	<button>Add bird</button>
				 	<br />
			 		</form>
			 		<input type="file" onChange={this.filehandler} />
				 	<button onClick={this.uploadhandler} name="savefile">Upload</button>
					<ul>
					{birdName}
					</ul>
					<Approuter />

				</center>
				<table>
					<tbody>
						<tr>
							<td style={{width: '1185px'}}>
								<input type="button" value="Prev" className="button-prev" 							 		
								style={{float: 'left' }} onClick={this.prev} />
								<input type ="button" value="Next" className="button-next"
								 onClick={this.next} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>

			);
	}
}
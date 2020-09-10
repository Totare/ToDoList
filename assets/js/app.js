import React, { Component } from 'react'
import { render } from 'react-dom'
import '../scss/style.scss'
import axios from 'axios'

export default class App extends Component{
	constructor(){
		super();

		//Etat
		this.state = {
			listElements: [],
		};
		
		this.getListElements();
	}

	//Comportement
	addElement(e){
		e.preventDefault();

		axios({
			method: 'post',
			url: 'myapi',
			data: {
				element: document.getElementById('newElementList')
			}
		})
		.then(res => {
		//   const listElements = res.data.results;
			// const newElement = {name:'coucou'}
			// this.state.listElements.push({name:'coucou'});
		})

		let newList = this.state.listElements.concat({name:'coucou'});
		this.setState({ listElements: newList });
	}

	getListElements(number) {
		axios.get('http://sv2.localhost/get')
		.then(res => {
		  const listElements = res.data.results;
		  this.setState({ listElements });
		})
	}

	//Rendu
	render(){
		let {listElements} = this.state;
		return (	
			<section>
				<div> 
					<input type = "text" name= "newElementList" id='newElementList'/>
					<button type = "submit" onClick={this.addElement.bind(this)}> Add </button>
				</div>
				<ul>
					{ listElements.map(listElements => <li>{listElements.name}</li>)}
				</ul>

			</section>
		)
	}
};




render(
	<App />,
	document.getElementById('root')
)

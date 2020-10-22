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
		this.url = 'http://apitodo.cda.moran-quesnel.com';
		this.getListElements();
	}

	//Comportement
	addElement(e){
		e.preventDefault();

		var newElement = document.getElementById('newElementList');
		var self = this;

		axios({
			method: 'put',
			url: self.url,
			data: {
				"description" : newElement.value
			}
		})
		.then(res => {
			const resElement = res.data;
			var newList= this.state.listElements.concat(resElement);
			newElement.value = "";
			this.setState({ listElements: newList });
		});		
	}

	getListElements(number) {
		axios.get(this.url)
		.then(res => {
		  const listElements = res.data;
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
					{ listElements.map(listElements => <li>{listElements.description}</li>)}
				</ul>

			</section>
		)
	}
};



render(
	<App />,
	document.getElementById('root')
)

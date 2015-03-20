var $ = require('jquery'); 
var _ = require('underscore');
var Backbone = require('backbone');
var React = require('react');
var list = require('./warrior-list');
var Warrior = require('./warrior');
    
var warriorCollection = Backbone.Collection.extend({
        					comparator : function (a,b) {
								return b.get('honor') - a.get('honor');
							}	
						}); 

var App = React.createClass({
	getInitialState : function () {
        	return { collection : new warriorCollection() };
	},
	componentDidMount : function () {
		list.forEach(function (value) {
			$.ajax({
				type : 'GET',
				url : 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22codewars.com%2Fusers%2F'+ value + '%22%20and%20xpath%3D%27%2F%2F*%5B%40id%3D%22shell_content%22%5D%2Fdiv%5B3%5D%2Fsection%27&format=json'
			}).done(function (data){
				this.state.collection.add({
					username : data.query.results.section.div.figure.img.title,
					name : data.query.results.section.div.figcaption.h1.content,
					clan : data.query.results.section.div.figcaption.div[2].content,
					skills : data.query.results.section.div.figcaption.div[3].content,
					honor : data.query.results.section.div.figcaption.div[4].content.split('#')[0],
					img : data.query.results.section.div.figure.img.src
				});
				this.state.collection.sort();
				this.forceUpdate();
			}.bind(this)).fail( function () {
				console.log('FATAL ERROR: request fail...');
			});
		}.bind(this));	
	},
	render : function () {
		var ranking = this.state.collection.map(function (model,index) {
			return <Warrior model={model} key={ index }/>;
				
		}); 
	    return (
	    	<div className="small-12 large-8 large-centered columns container" >
		      	<div className="box">
		      		<h1 className="title">REVELEX CODEWARS RANKING</h1>
		      		<div className="row rank-list">
		      			{ ranking }
		      		</div>
		      	</div>
		    </div>  	
	    );  	
	}
}); 


$(document).ready(function () {
    
    React.render( 
		<App  />,
	   	document.getElementById('app') 
	); 

});

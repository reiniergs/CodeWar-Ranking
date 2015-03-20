var React = require('react');
var HonorUpper = require('./HonorUpper');

var Warrior = React.createClass({displayName: 'Warrior',
	render : function () {
		return (
			React.createElement("div", {className: "small-12 columns warrior", key:  this.props.model.get('id') }, 
				React.createElement("div", {className: "large-2 columns"}, 
					React.createElement("img", {className: "avatar", src: this.props.model.get('img')})
				), 
				React.createElement("div", {className: "small-7 columns"}, 
					React.createElement("h1", {className: "name"},  this.props.model.get('name') ), 
					React.createElement("h6", null, "Clan: ", this.props.model.get('clan')), 
					React.createElement("h6", null, "Skills: ", this.props.model.get('skills')), 
					React.createElement("h6", null, "Honor: ", this.props.model.get('honor'))
				), 
				React.createElement("div", {className: "small-3 columns"}, 
					React.createElement(HonorUpper, {value: this.props.model.get('honor')})
				)
			)
			);
	}
});
module.exports = Warrior;
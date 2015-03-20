var React = require('react');

var HonorUpper = React.createClass({displayName: 'HonorUpper',
	getInitialState : function () {
		return { value : 0 };
	},
	componentDidMount : function () {
		var interval = setInterval(function () {

			if (this.state.value < this.props.value) {
				this.setState({ value : this.state.value +  1 });
			} else clearInterval(interval);
		}.bind(this),20);
	},
	render : function () {
		return (
			React.createElement("h1", {className: "big-honor"},  this.state.value)
			);
	}
});
module.exports = HonorUpper;
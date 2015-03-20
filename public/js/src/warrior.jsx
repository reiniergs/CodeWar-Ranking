var React = require('react');

var Warrior = React.createClass({
	render : function () {
		return (
			<div className="small-12 columns warrior">
				<div className="large-2 columns">
					<img className="avatar" src={this.props.model.get('img')} />
				</div>
				<div className="small-7 columns">
					<h1 className="name">{ this.props.model.get('name') }</h1>
					<h6>Clan: {this.props.model.get('clan')}</h6>
					<h6>Skills: {this.props.model.get('skills')}</h6>
					<h6>Honor: {this.props.model.get('honor')}</h6>
				</div>
				<div className="small-3 columns">
					<h1 className="big-honor">{this.props.model.get('honor')}</h1>
				</div>
			</div>
			);
	}
});
module.exports = Warrior;
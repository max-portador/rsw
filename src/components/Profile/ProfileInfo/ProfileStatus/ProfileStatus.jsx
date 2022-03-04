import React from "react";
import css from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component{
	state = {
		editMode: false,
	}

	activateEditMode = () => {
		this.setState( {editMode: true})
	}

	deactivateEditMode = () => {
		this.setState( {editMode: false})
	}

	render() {
		return <div className={css.profileStatus}>
			{!this.state.editMode &&
			<div>
				<span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
			</div>}
			{this.state.editMode &&
			<div>
				<input value={this.props.status}
					   autoFocus={true}
					   onBlur={ this.deactivateEditMode}/>
			</div>}
		</div>
	}

}

export default ProfileStatus;
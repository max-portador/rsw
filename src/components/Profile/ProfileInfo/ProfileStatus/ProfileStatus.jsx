import React from "react";
import css from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component{

	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState( {editMode: true})
	}

	deactivateEditMode = () => {
		this.setState( {editMode: false} )
		this.props.updateStatus(this.state.status)
	}

	onStatusChanged = (e) => {
		this.setState({
			status: e.currentTarget.value 
		})
	}

	render() {
		return <div className={css.profileStatus}>
			{!this.state.editMode &&
			<div>
				<span onDoubleClick={ this.activateEditMode }>{this.state.status || "-----"}</span>
			</div>}
			{this.state.editMode &&
			<div>
				<input value={this.state.status || "-----"}
					   autoFocus={true}
					   onBlur={ this.deactivateEditMode}
					   onChange={this.onStatusChanged}  />
			</div>}
		</div>
	}

}

export default ProfileStatus;
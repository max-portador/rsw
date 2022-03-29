import React from "react";
import css from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {
	state = {
		status: this.props.status,
		editMode: false
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.status !== this.props.status){
			this.setState({
				status: this.props.status
			})
		}
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivateEditMode = () => {
		this.setState({
			editMode: false,
		})
		this.props.updateStatus(this.state.status === "" ? "----" : this.state.status)
	}

	render() {



		const onStatusChanged = (e) => {
			this.setState({
				status: e.currentTarget.value
			})
		}

		return <div className={css.profileStatus}>
			{!this.state.editMode &&
				<div>
					<span onDoubleClick={this.activateEditMode}>{typeof this.state.status == "string" ? this.state.status : "----"}</span>
				</div>}
			{this.state.editMode &&
				<div>
					<input value={typeof this.state.status == "string" ? this.state.status : "----"}
						   autoFocus={true}
						   onBlur={this.deactivateEditMode}
						   onChange={onStatusChanged}/>
				</div>}
		</div>

	}
}

export default ProfileStatus;
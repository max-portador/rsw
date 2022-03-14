import React, {useEffect, useState} from "react";
import css from "./ProfileStatus.module.css"


const ProfileStatus = (props) => {

	useEffect( () => {
		setStatus(props.status)
	}, [props.status])

	let [editMode, setEditMode] = useState( false)
	let [status, setStatus] = useState(props.status)


	const activateEditMode = () => {
		setEditMode(true)
	}

	const deactivateEditMode = () => {
		setEditMode(false)
		props.updateStatus(status === "" ? "----" : status)
	}

	const onStatusChanged = (e) => {
		setStatus(e.currentTarget.value)
	}

	// componentDidUpdate(prevProps, prevState, snapshot) {
	// 	if (prevProps.status !== this.props.status){
	// 		this.setState({
	// 			status: this.props.status
	// 		})
	// 	}
	// }


		return <div className={css.profileStatus}>
			{ !editMode &&
			<div>
				<span onDoubleClick={ activateEditMode }>{typeof status == "string" ? status : "----"}</span>
			</div>}
			{ editMode &&
			<div>
				<input value={  typeof status == "string" ? status : "----"}
					   autoFocus={true}
					   onBlur={ deactivateEditMode}
					   onChange={onStatusChanged}  />
			</div>}
		</div>

}

export default ProfileStatus;
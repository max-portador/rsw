"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProfileStatus_module_css_1 = __importDefault(require("./ProfileStatus.module.css"));
class ProfileStatus extends react_1.default.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {
        this.setState({ editMode: true });
    };
    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    };
    onStatusChanged = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };
    render() {
        console.log("render!!!");
        return <div className={ProfileStatus_module_css_1.default.profileStatus}>
			{!this.state.editMode &&
                <div>
				<span onDoubleClick={this.activateEditMode}>{this.state.status || "-----"}</span>
			</div>}
			{this.state.editMode &&
                <div>
				<input value={this.state.status || "-----"} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChanged}/>
			</div>}
		</div>;
    }
}
exports.default = ProfileStatus;

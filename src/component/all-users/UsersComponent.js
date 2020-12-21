import React, {Component} from 'react';
import {UserService} from "../../services/userService";
import UserComponent from "../user/UserComponent";


class App extends Component {
	inputMain = React.createRef();
	userService= new UserService()

	state = {inputValue: '', users: [], chosen: null};

	oninputFill = () => {
		console.log(this.inputMain.current.value);
		this.setState({inputValue: this.inputMain.current.value});

	};
	userSubmit=(id)=>{
	    this.userService.getUserById(id).then(value => this.setState({chosen:value}))
        console.log(this.state.chosen)
    }
	onFormSubmit = (e) => {
		e.preventDefault();

	};
	componentDidMount() {
	    this.userService.getAllUsers().then(value=>this.setState({users:value}))
    }

    render() {
		let {inputValue, users, chosen} = this.state;
		let disabled=false
        {if ((inputValue<1)||(inputValue>10)){
            disabled=true

        }}
		return (
			<div>
                {users.map(value => <UserComponent item={value} key={value.id} SelectUser={this.userSubmit}/>)}
				<form onSubmit={this.onFormSubmit}>
					<input ref={this.inputMain} type={'number'} onInput={this.oninputFill} value={inputValue}/>
                    <button onClick={()=>this.userSubmit(inputValue)} disabled={disabled}>send</button>
                    {console.log(this.state.chosen)}
                    {chosen && <UserComponent item={chosen} onClick={true}/>}

				</form>

			</div>
		);
	}
}

export default App;
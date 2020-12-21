import React, {Component} from 'react';

class UserComponent extends Component {
    inputMain=React.createRef();
    render() {
        let {item, onClick, SelectUser} = this.props
        return (
            <div>
                <div>{item.id}--{item.name}
                    {
                        !onClick && <button
                            onClick={() => SelectUser(item.id)}
                        >chose me</button>
                    }
                </div>

            </div>
        );
    }
}

export default UserComponent;
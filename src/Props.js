import React from "react";

class Props extends React.Component {

    constructor(props){
        super(props);
        this.state = {brand: "mersidice"}
    }
    render() {
            return (

                <h1>my car = {this.state.brand}</h1>
            )
    }
}

export default Props;
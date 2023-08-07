import React from "react";

class Home extends React.Component {
    constructor() {
        super();
        this.state = { name: "lallu", color: "Red" }
    }

    getdata = () => {
        this.setState({ name: "jaydip" })
    }
    setdata = () => {
        this.setState({ color: "green" })

    }

    render() {

        

        return (
            <>
                <h2>Hello Welcome......!</h2>
                <h1>Name: {this.state.name}</h1>
                <h1>Color: {this.state.color}</h1>

                <input type="button" value="name" onClick={this.getdata} /> <br />
                <input type="button" value="Color" onClick={this.setdata} />
            </>
        )
    }
}
export default Home
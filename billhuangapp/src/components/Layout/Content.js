import React, { Component } from 'react';
import SortBy from '../Employee/SortBy';
import { FormControl } from 'react-bootstrap';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        console.log("search text=", this.state.value);
    }

    render() {

        var paddingTop = {
            "padding-top": "13px"
        };

        return (
            <div className={'content-area'}>

                <div className={"floatLeft"}>
                    <h1>Our Employees</h1>
                </div>
                <div className={"floatRight"}>
                    <div className={"floatLeft"}><SortBy /></div>
                    <div className={"floatLeft labelStyle paddingTop"}>Search: </div>
                    <div className={"floatLeft"} style={paddingTop}>
                        <FormControl
                            type="text"
                            value={this.state.value}
                            placeholder="Enter text"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default MainContent
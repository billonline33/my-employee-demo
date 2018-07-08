import React from "react";
import { SplitButton, MenuItem } from "react-bootstrap";

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByField: "firstName"
    };
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  handleSortByChange = sortByField => {
    this.setState({ sortByField });
    console.log("this.state.sortByFiled=", this.state.sortByField);
  };

  render() {
    const { sortByField } = this.state;

    const paddingStyle = {
      padding: "8px",
      float: "left"
    };

    return (
      <div>
        <div>
          <div className={"floatLeft labelStyle"}> Sort by:</div>
          <div className={"floatLeft"} style={paddingStyle}>
            <SplitButton bsSize="large" title={`${sortByField} `}>
              <MenuItem eventKey="firstName" onSelect={this.handleSortByChange}>
                firstName
              </MenuItem>
              <MenuItem eventKey="lastName" onSelect={this.handleSortByChange}>
                lastName
              </MenuItem>
              <MenuItem eventKey="jobTitle" onSelect={this.handleSortByChange}>
                jobTitle
              </MenuItem>
              <MenuItem eventKey="age" onSelect={this.handleSortByChange}>
                age
              </MenuItem>
              <MenuItem
                eventKey="dateJoined"
                onSelect={this.handleSortByChange}
              >
                dateJoined
              </MenuItem>
            </SplitButton>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBy;

import React from "react";
import { SplitButton, MenuItem } from "react-bootstrap";

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByField: "First Name"
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
              <MenuItem
                eventKey="First Name"
                onSelect={this.handleSortByChange}
              >
                First Name
              </MenuItem>
              <MenuItem eventKey="Last Name" onSelect={this.handleSortByChange}>
                Last Name
              </MenuItem>
            </SplitButton>
          </div>
        </div>
      </div>
    );
  }
}

export default SortBy;

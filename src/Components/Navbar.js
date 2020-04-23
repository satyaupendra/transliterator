import React from 'react';
class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectValue: ""
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this); }

  handleDropdownChange(e){
  this.setState({ selectValue: e.target.value });
  this.props.extract(this.state.selectValue);
 }
  render() {
    return (
      <div style={{paddingTop:'20px'}}className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor="inputGroupSelect01">Choose Language</label>
      </div>
      <select className="custom-select" id="inputGroupSelect01">
       <option value="telugu">Telugu</option>
        <option value="tamil">Tamil</option>
        <option value="hindi">Hindi</option>
      </select>
    </div>
    );
  }
}
export default Navbar;
import React, { Component } from 'react';
import DatePicker from "react-datepicker";


class Employment extends Component {
  state = {
    startdate: '',
    enddate: '',
    jobtitle: '',
    company_name: '',
    startdate: '',
    enddate: '',
    description: ''
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // handleChange1 = date => {
  //   this.setState({
  //     startdate: date
  //   });
  // };

  // handleChange2 = date => {
  //   this.setState({
  //     enddate: date
  //   });
  // };

  render() {
    const props = this.props
    return (

      <div style={{ padding: '5%' }}>
        <h2><b>Employment </b></h2>
        <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6><br />

        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Job Title</label>
              <input type="text" class="form-control" name="jobtitle" value={props.jobtitle} onChange={props.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Company Name</label>
              <input type="text" class="form-control" name="company_name" value={props.company_name} onChange={props.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Start Date: </label>
              <input type="text" class="form-control" name="startdate" value={props.startdate} onChange={props.handleChange} />
              {/* <DatePicker class="form-control"
                selected={this.state.startdate}
                onChange={this.handleChange1}
              /> */}


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">End Date: </label>
              <input type="text" class="form-control" name="enddate" value={props.enddate} onChange={props.handleChange} />
              {/* <DatePicker class="form-control"
                selected={this.state.enddate}
                onChange={this.handleChange2}
              /> */}
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>



          <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" onClick={props.addToArray}>Continue </button>

        </form>


      </div>
    );
  }
}

export default Employment;

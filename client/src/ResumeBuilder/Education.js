import React, { Component } from 'react';


class Education extends Component {
  state = {
    degree: '',
    schoolname: '',
    description: '',
    startdate: '',
    enddate: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const props = this.props
    return (

      <div style={{ padding: '5%' }}>
        <h2><b>Education </b></h2>
        <h6>Your education section will help give interviewers a good look at your background. <br /> </h6><br />

        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Degree</label>
              <input type="text" class="form-control" name="degree" onChange={this.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">School Name</label>
              <input type="text" class="form-control" name="schoolname" onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Start Date: </label>
              <input type="text" class="form-control" name="startdate" onChange={this.handleChange} />



            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">End Date: </label>
              <input type="text" class="form-control" name="enddate" onChange={this.handleChange} />

            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" name="description" onChange={this.handleChange}></textarea>
          </div>



          <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" onClick={props.addPage}>Continue </button>

        </form>


      </div>
    );
  }
}

export default Education;

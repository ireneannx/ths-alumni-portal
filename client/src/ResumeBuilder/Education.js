import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEducation, addEducationExtra } from './resumeAction';
import FormEducation from './FormEducation';

class Education extends Component {
  state = {
    degree: '',
    schoolname: '',
    description: '',
    startdate: '',
    enddate: '',
    toggle: 0,

    degree2: '',
    schoolname2: '',
    description2: '',
    startdate2: '',
    enddate2: ''
  }

  componentDidMount() {

    this.setState({
      degree: this.props.education.degree,
      schoolname: this.props.education.schoolname,
      description: this.props.education.description,
      startdate: this.props.education.startdate,
      enddate: this.props.education.enddate,

      degree2: this.props.education.degree2,
      schoolname2: this.props.education.schoolname2,
      description2: this.props.education.description2,
      startdate2: this.props.education.startdate2,
      enddate2: this.props.education.enddate2,
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let data = this.state
    // console.log('for resume', data)
    await this.props.addEducation(data, this.props.addPage)
  }

  next = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  changeToggle = async (e) => {
    let data = this.state
    await this.props.addEducationExtra(data, this.next)
  }

  render() {
    const { education } = this.props
    const props = this.props
    console.log(education)

    return !this.state.toggle ? (

      <div style={{ padding: '5%' }}>
        <h2><b>Education </b></h2>
        <h6>Your education section will help give interviewers a good look at your background. <br /> </h6><br />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Degree</label>
              <input type="text" class="form-control" name="degree" value={this.state.degree} onChange={this.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">School Name</label>
              <input type="text" class="form-control" name="schoolname" value={this.state.schoolname} onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Start Date: </label>
              <input type="text" class="form-control" name="startdate" value={this.state.startdate} onChange={this.handleChange} placeholder="dd/mm/yyyy" />

            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">End Date: </label>
              <input type="text" class="form-control" name="enddate" value={this.state.enddate} onChange={this.handleChange} placeholder="dd/mm/yyyy" />

            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" value={this.state.description} name="description" onChange={this.handleChange}></textarea>
          </div>

          <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" > Continue </button>

          <button type="success" class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Education </button>

        </form>


      </div>
    ) : (
        <div style={{ padding: '5%' }}>
          <h2><b>Education 2 </b></h2>
          <h6>Your education section will help give interviewers a good look at your background. <br /> </h6><br />

          <FormEducation changeToggle={this.changeToggle} handleChange={this.handleChange} {...this.state} education={education} />

          <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" onClick={(e) => this.handleSubmit(e)} >Continue </button>

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    education: state.Resume.education
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addEducation,
  addEducationExtra
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Education);

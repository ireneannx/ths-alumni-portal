import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmployment, addEmploymentExtra } from './resumeAction';
import FormEmployment from './FormEmployment'
class Employment extends Component {
  state = {
    startdate: '',
    enddate: '',
    jobtitle: '',
    company_name: '',
    description: '',
    toggle: 0,

    startdate2: '',
    enddate2: '',
    jobtitle2: '',
    company_name2: '',
    description2: '',

    startdate3: '',
    enddate3: '',
    jobtitle3: '',
    company_name3: '',
    description3: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  next = () => {
    this.setState({
      toggle: this.state.toggle + 1
    })
  }

  changeToggle = async (e) => {
    let data = this.state
    await this.props.addEmploymentExtra(data, this.next)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = this.state
    // console.log('for resume', data)

    await this.props.addEmployment(data, this.props.addPage)
  }

  render() {
    const props = this.props

    if (this.state.toggle == 0) {
      return (<div style={{ padding: '5%' }}>
        <h2><b>Employment </b></h2>
        <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6><br />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Job Title</label>
              <input type="text" class="form-control" name="jobtitle" onChange={this.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Company Name</label>
              <input type="text" class="form-control" name="company_name" onChange={this.handleChange} />
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
            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" onChange={this.handleChange} rows="6"></textarea>
          </div>

          <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button class="btn btn-primary" type="submit"> Continue </button>

        </form>
        <button class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Job </button>



      </div>
      )
    } else if (this.state.toggle == 1) {
      return (
        <div style={{ padding: '5%' }}>
          <h2><b>Employment 2 </b></h2>
          <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6><br />
          <FormEmployment changeToggle={this.changeToggle} handleChange={this.handleChange} {...this.state} />

          <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button class="btn btn-primary" onClick={(e) => this.handleSubmit(e)}> Continue </button>
          <button class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Job </button>



        </div>

      )
    } else {
      return (
        <div style={{ padding: '5%' }}>
          <h2><b>Employment 3</b></h2>
          <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6><br />

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Job Title</label>
                <input type="text" class="form-control" name="jobtitle3" onChange={this.handleChange} />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Company Name</label>
                <input type="text" class="form-control" name="company_name3" onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Start Date: </label>
                <input type="text" class="form-control" name="startdate3" onChange={this.handleChange} />


              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">End Date: </label>
                <input type="text" class="form-control" name="enddate3" onChange={this.handleChange} />

              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" onChange={this.handleChange} name="description3" rows="6"></textarea>
            </div>

            <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
            <button class="btn btn-primary" > Continue </button>

          </form>
        </div>


      )
    }



  }
}

const mapStateToProps = (state) => {
  return {
    employment: state.Resume.employment
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addEmployment,
  addEmploymentExtra
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Employment);

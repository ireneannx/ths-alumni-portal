import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addEmployment, addEmploymentExtra } from './resumeAction';
import FormEmployment from './FormEmployment'
class Employment extends Component {
  state = {
    startdate: '',
    jobtitle: '',
    company_name: '',
    enddate: '',
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

  componentDidMount() {
    this.setState({
      startdate: this.props.employment.startdate,
      jobtitle: this.props.employment.jobtitle,
      company_name: this.props.employment.company_name,
      enddate: this.props.employment.enddate,
      description: this.props.employment.description,
      toggle: 0,

      startdate2: this.props.employment.startdate2,
      enddate2: this.props.employment.enddate2,
      jobtitle2: this.props.employment.jobtitle2,
      company_name2: this.props.employment.company_name2,
      description2: this.props.employment.description2,

      startdate3: this.props.employment.startdate3,
      enddate3: this.props.employment.enddate3,
      jobtitle3: this.props.employment.jobtitle3,
      company_name3: this.props.employment.company_name3,
      description3: this.props.employment.description3
    })
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

    if (this.state.toggle === 0) {
      return (<div style={{ padding: '5%' }}>
        <h2><b>Employment </b></h2>
        <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6><br />

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Job Title</label>
              <input type="text" class="form-control" name="jobtitle" value={this.state.jobtitle} onChange={this.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Company Name</label>
              <input type="text" class="form-control" name="company_name" value={this.state.company_name} onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Start Date: </label>
              <input type="text" class="form-control" name="startdate" value={this.state.startdate} placeholder="dd/mm/yyyy" onChange={this.handleChange} />


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">End Date: </label>
              <input type="text" class="form-control" name="enddate" value={this.state.enddate} placeholder="dd/mm/yyyy" onChange={this.handleChange} />

            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description </label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" value={this.state.description} onChange={this.handleChange} rows="6"></textarea>
          </div>

          <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button class="btn btn-primary" type="submit"> Continue </button>

        </form>
        <button class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Job </button>



      </div>
      )
    } else if (this.state.toggle === 1) {
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
                <input type="text" class="form-control" name="jobtitle3" value={this.state.jobtitle3} onChange={this.handleChange} />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Company Name</label>
                <input type="text" class="form-control" name="company_name3" value={this.state.company_name3} onChange={this.handleChange} />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Start Date: </label>
                <input type="text" class="form-control" name="startdate3" value={this.state.startdate3} placeholder="dd/mm/yyyy"
                  onChange={this.handleChange} />


              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">End Date: </label>
                <input type="text" class="form-control" name="enddate3" value={this.state.enddate3} placeholder="dd/mm/yyyy" onChange={this.handleChange} />

              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Description </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" value={this.state.description3} onChange={this.handleChange} name="description3" rows="6"></textarea>
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

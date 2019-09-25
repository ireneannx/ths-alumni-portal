import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Employment from "./Employment";
import Education from "./Education";
import References from './References';
import SkillSection from './Skill';
import Summary from './Summary'

export class ResumeBuilder extends Component {
  state = {
    page: 1
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page + 1
    })
  }

  addToArray = (data) => {

    this.setState({
      employment: [data],
      page: this.state.page + 1
    })
    console.log(this.state);
  }



  subtractPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    })
  }


  render() {
    console.log("RESUME BUILDER****", this.state)
    switch (this.state.page) {
      case 1:
        return (<PersonalDetails addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
      case 2:
        return (<Employment subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />);
      case 3:
        return (<Education subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />);
      case 4:
        return (<Summary subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
      case 5:
        return (<References subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
      case 6:
        return (<SkillSection subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
      default:
        return (<PersonalDetails addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
    }
  }
}





class Page extends Component {

  render() {
    return (
      <>
        <div className="container">

          <ResumeBuilder />

        </div>
      </>
    );
  }
}

export default Page;




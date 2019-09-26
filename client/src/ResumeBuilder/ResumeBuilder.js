import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Employment from "./Employment";
import DownloadResume from './DownloadResume'
import Education from "./Education";
import References from './References';
import SkillSection from './Skill';
import Summary from './Summary';
import NotFound from '../NotFound.js'



export class ResumeBuilder extends Component {
  state = {
    page: 1
  }

  addPage = () => {
    // e.preventDefault()

    this.setState({
      page: this.state.page + 1
    })
  }


  subtractPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    })
  }


  render() {
    //console.log("RESUME BUILDER****", this.state)
    switch (this.state.page) {
      case 1:
        return (<PersonalDetails addPage={this.addPage} {...this.state} />)
      case 2:
        return (<Employment subtractPage={this.subtractPage} addPage={this.addPage}  {...this.state} />);
      case 3:
        return (<Education subtractPage={this.subtractPage} addPage={this.addPage}  {...this.state} />);
      case 4:
        return (<References subtractPage={this.subtractPage} addPage={this.addPage}  {...this.state} />);
      case 5:
        return (<Summary subtractPage={this.subtractPage} addPage={this.addPage}  {...this.state} />);
      case 6:
        return (<SkillSection subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
        case 7:
          return(<DownloadResume />)
        default:
        return (<NotFound />)
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




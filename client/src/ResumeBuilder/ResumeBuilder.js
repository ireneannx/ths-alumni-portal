import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import Employment from "./Employment";
import DownloadResume from './DownloadResume'
// import P3 from "./P3";
// import P4 from "./P4";

export class ResumeBuilder extends Component {
  state = {
    page: 1,

    //personal details
    pdname: '',
    pdprofession: '',
    pdaddress: '',
    pdphone: '',
    pdemail: '',
    pdwebsite: '',


    summary: '',

    education: {
      degree: '',
      schoolname: '',
      description: ''
    },

    skills: {
      skilllevel: '',
      skillnames: ''
    },

    employment: [],

    references: {
      name: '',
      title: '',
      company: '',
      email: '',
      location: '',
      phone: '',
      address: ''
    }

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

  // addToArray = async (data) => {
  //   this.setState({
  //     employment: [...this.state.employment, data]
  //   })
  //   console.log(this.state);

  // }


  subtractPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    })
  }


  render() {

    switch (this.state.page) {
      case 1:
        return (<DownloadResume addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
      case 2:
        return (<Employment subtractPage={this.subtractPage} addPage={this.addPage} addToArray={this.addToArray} handleChange={this.handleChange}  {...this.state} />);
      // case 3:
      //   return (<P3 subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />)
      // case 4:
      //   return (<P4 />)
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




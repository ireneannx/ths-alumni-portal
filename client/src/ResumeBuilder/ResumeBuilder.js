import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
// import P2 from "./P2";
// import P3 from "./P3";
// import P4 from "./P4";

export class ResumeBuilder extends Component {
  state = {
    page: 1,
    personal_details: {
      name: '',
      profession: '',
      address: '',
      phone: '',
      email: '',
      website: ''
    },

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

    employment: {
      jobtitle: '',
      company_name: '',
      startdate: '',
      enddate: ''
    },

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



  subtractPage = (e) => {
    e.preventDefault()
    this.setState({
      page: this.state.page - 1
    })
  }


  render() {

    switch (this.state.page) {
      case 1:
        return (<PersonalDetails addPage={this.addPage} handleChange={this.handleChange} {...this.state} />)
      // case 2:
      //   return (<P2 subtractPage={this.subtractPage} addPage={this.addPage} handleChange={this.handleChange}  {...this.state} />);
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
          <div className="row">
            <div className="col">
              <ResumeBuilder />
            </div>
            <div className="col">
              RITURAJ WILL RENDER HIS PART HEREEEE.
          </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page;




import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPersonalDetails } from './resumeAction';

class PersonalDetails extends React.PureComponent {
  state = {
    name: '',
    profession: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    // clicked: false
  }

  componentDidMount() {

    this.setState({
      name: this.props.personalDetails.name,
      profession: this.props.personalDetails.profession,
      address: this.props.personalDetails.address,
      phone: this.props.personalDetails.phone,
      email: this.props.personalDetails.email,
      website: this.props.personalDetails.website,
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

    await this.props.addPersonalDetails(data, this.props.addPage)
  }

  async componentWillUnmount() {
    await this.setState({
      clicked: true
    })
    console.log(this.state.clicked)
  }

  render() {
    return (
      <div style={{ padding: '5%' }}>
        <h2><b>Personal Details</b></h2>
        <h6>Lets get started with creating your resume. <br /> Enter your contact details to get started. <br /></h6>

        <form onSubmit={(e) => this.handleSubmit(e)} >
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Profession</label>
              <input type="text" class="form-control" name="profession" value={this.state.profession} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" name="address" value={this.state.address} onChange={(e) => this.handleChange(e)} />
          </div>

          <div className="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Phone</label>
              <input type="text" class="form-control" name="phone" value={this.state.phone} onChange={(e) => this.handleChange(e)} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Email</label>
              <input type="text" class="form-control" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Website</label>
            <input type="text" class="form-control" name="website" value={this.state.website} onChange={(e) => this.handleChange(e)} />
          </div>

          <button type="submit" class="btn btn-primary" >Continue </button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    personalDetails: state.Resume.personalDetails
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addPersonalDetails
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReferences } from './resumeAction';

class References extends Component {
  state = {
    name: '',
    title: '',
    company: '',
    email: '',
    location: '',
    phone: '',
    name2: '',
    title2: '',
    company2: '',
    email2: '',
    location2: '',
    phone2: '',
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = this.state
    // console.log('for resume', data)

    await this.props.addReferences(data, this.props.addPage)
  }
  render() {
    const props = this.props
    return (

      <div style={{ padding: '5%' }}>
        <h2><b>References </b></h2>
        <h6>TIf the jobs you're applying for require references, be sure to list a few.<br />  If you don't have any previous work experience you can include a mentor, advisor, or friend.  </h6><br />


        <form onSubmit={(e) => this.handleSubmit(e)}>
          <p> <b>Referee 1</b></p>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control" name="name" onChange={this.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Title</label>
              <input type="text" class="form-control" name="title" onChange={this.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Company </label>
              <input type="text" class="form-control" name="company" onChange={this.handleChange} />


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Email </label>
              <input type="text" class="form-control" name="email" onChange={this.handleChange} />

            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Location </label>
              <input type="text" class="form-control" name="location" onChange={this.handleChange} />


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Phone: </label>
              <input type="text" class="form-control" name="phone" onChange={this.handleChange} />

            </div>
          </div>


          <p> <b>Referee 2</b></p>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control" name="name" onChange={props.handleChange} />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Title</label>
              <input type="text" class="form-control" name="title" onChange={props.handleChange} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Company </label>
              <input type="text" class="form-control" name="company" onChange={props.handleChange} />


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Email </label>
              <input type="text" class="form-control" name="email" onChange={props.handleChange} />

            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Location </label>
              <input type="text" class="form-control" name="location" onChange={props.handleChange} />


            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Phone: </label>
              <input type="text" class="form-control" name="phone" onChange={props.handleChange} />

            </div>
          </div>


          <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" >Continue </button>

        </form>


      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    references: state.Resume.references
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addReferences
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(References);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSkills, addSkillsExtra } from './resumeAction';
import SkillForm from './SkillForm';

class Skills extends Component {
  state = {
    skill: '',
    proficiency: '',
    toggle: 0,

    skill2: '',
    proficiency2: '',

    skill3: '',
    proficiency3: ''
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
    await this.props.addSkillsExtra(data, this.next)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    let data = this.state
    // console.log('for resume', data)

    await this.props.addSkills(data, this.props.addPage)
  }

  render() {

    const props = this.props

    if (this.state.toggle == 0) {
      return (<>
        <div style={{ padding: '5%' }}>
          <h2><b>Skills </b></h2>
          <h6>Your skills section should showcase a variety of things you've learned from training, practice, or experience. <br />Such as public speaking, photoshop, HTML, etc<br /> </h6><br />


          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input class="form-control" type="text" placeholder="Enter Skills" name="skill" onChange={this.handleChange} />
            <br />
            <div class="form-group" onChange={this.handleChange}>
              <label for="exampleFormControlSelect1">Select skill proficiency</label>
              <select class="form-control" id="exampleFormControlSelect1" name="proficiency" >
                <option>Select</option>
                <option value="Beginner" >Beginner</option>
                <option value="Intermediate" onChange={this.handleChange}>Intermediate</option>
                <option value="Expert" onChange={this.handleChange}>Expert</option>
              </select>
            </div>


            <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
            <button class="btn btn-primary" type="submit"> Continue </button>
          </form>

          <button class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Skill </button>
        </div>
      </>
      );
    } else if (this.state.toggle == 1) {
      return (
        <>
          <div style={{ padding: '5%' }}>

            <SkillForm changeToggle={this.changeToggle} handleChange={this.handleChange} {...this.state} />

            <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>

            <button class="btn btn-primary" onClick={(e) => this.handleSubmit(e)} type="submit"> Continue </button>

            <button class="btn btn-success" onClick={this.changeToggle} style={{ margin: "10px" }}> Add another Skill </button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div style={{ padding: '5%' }}>
            <h2><b>Skill 3 </b></h2>
            <h6>Your skills section should showcase a variety of things you've learned from training, practice, or experience. <br />Such as public speaking, photoshop, HTML, etc<br /> </h6><br />


            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input class="form-control" type="text" placeholder="Enter Skill" name="skill3" onChange={this.handleChange} />
              <br />
              <div class="form-group" onChange={this.handleChange}>
                <label for="exampleFormControlSelect1">Select skill proficiency</label>
                <select class="form-control" id="exampleFormControlSelect1" name="proficiency3" >
                  <option value="Beginner" >Beginner</option>
                  <option value="Intermediate" onChange={this.handleChange}>Intermediate</option>
                  <option value="Expert" onChange={this.handleChange}>Expert</option>
                </select>
              </div>


              <button class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
              <button class="btn btn-primary" type="FOR RITURAJ"> Finish </button>
            </form>
          </div>
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.Resume.skills
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addSkills,
  addSkillsExtra
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

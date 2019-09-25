import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSkills } from './resumeAction';

class Skills extends Component {
  state = {
    skill: '',
    proficiency: ''
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

    await this.props.addSkills(data, this.props.addPage)
  }

  render({ subtractPage } = this.props) {
    const props = this.props
    return (<>
      <div style={{ padding: '5%' }}>
        {/* <h2><b>Skills </b></h2> */}
        <h6>Your skills section should showcase a variety of things you've learned from training, practice, or experience. <br />Such as public speaking, photoshop, HTML, etc<br /> </h6><br />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input class="form-control" type="text" placeholder="Enter Skill" name="skill" onChange={this.handleChange} />
          <br />
          <div class="form-group" onChange={this.handleChange}>
            <label for="exampleFormControlSelect1">Select skill proficiency</label>
            <select class="form-control" id="exampleFormControlSelect1" name="proficiency" >
              <option value="Beginner" >Beginner</option>
              <option value="Intermediate" onChange={this.handleChange}>Intermediate</option>
              <option value="Expert" onChange={this.handleChange}>Expert</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" onClick={subtractPage} style={{ margin: "10px" }}> Back </button>
          <button type="submit" class="btn btn-primary" style={{ margin: "10px" }}> Finish </button>
        </form>

        <button onClick={props.increaseSkill}>Add</button>

      </div>
    </>
    );
  }
}

class SkillSection extends Component {
  state = {
    number: 1
  }

  increaseSkill = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {

    for (let i = 0; i < this.state.number; i++) {
      return (<>
        <h2><b>{`Skill ${this.state.number}`} </b></h2>
        <Skills increaseSkill={this.increaseSkill} /></>);
    }

  }
}

const mapStateToProps = (state) => {
  return {
    skills: state.Resume.skills
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addSkills
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

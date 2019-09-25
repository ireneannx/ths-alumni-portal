import React, { Component } from 'react';

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
  render() {
    const props = this.props
    return (<>
      <div style={{ padding: '5%' }}>
        {/* <h2><b>Skills </b></h2> */}
        <h6>Your skills section should showcase a variety of things you've learned from training, practice, or experience. <br />Such as public speaking, photoshop, HTML, etc<br /> </h6><br />
        <form>
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
        </form>
        <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
        <button type="submit" class="btn btn-primary" style={{ margin: "10px" }}> Finish </button>
        <button type="submit" onClick={props.increaseSkill}>Add</button>

      </div>
    </>);
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

export default SkillSection;

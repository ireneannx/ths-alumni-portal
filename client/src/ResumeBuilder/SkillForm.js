import React from 'react';

const SkillForm = (props) => {
  return (<>
    <h2><b>Skill 2 </b></h2>
    <h6>Your skills section should showcase a variety of things you've learned from training, practice, or experience. <br />Such as public speaking, photoshop, HTML, etc<br /> </h6><br />


    <form onSubmit={(e) => props.handleSubmit(e)}>
      <input class="form-control" type="text" placeholder="Enter Skill" name="skill2" value={props.skill2} onChange={props.handleChange} />
      <br />
      <div class="form-group" onChange={props.handleChange}>
        <label for="exampleFormControlSelect1">Select skill proficiency</label>
        <select class="form-control" id="exampleFormControlSelect1" name="proficiency2" >
          <option> Select </option>
          <option onChange={props.handleChange} value="Beginner" >Beginner</option>
          <option onChange={props.handleChange} value="Intermediate">Intermediate</option>
          <option onChange={props.handleChange} value="Expert">Expert</option>
        </select>
      </div>
    </form>

  </>);
}

export default SkillForm;
import React from 'react';


const FormEducation = (props) => (
  <form>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Degree</label>
        <input type="text" class="form-control" name="degree2" onChange={props.handleChange} />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">School Name</label>
        <input type="text" class="form-control" name="schoolname2" onChange={props.handleChange} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Start Date: </label>
        <input type="text" class="form-control" name="startdate2" placeholder="dd/mm/yyyy" onChange={props.handleChange} />



      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">End Date: </label>
        <input type="text" class="form-control" name="enddate2" placeholder="dd/mm/yyyy" onChange={props.handleChange} />

      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description </label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" name="description2" value={props.education.enddate2} onChange={props.handleChange}></textarea>
    </div>
  </form>
)

export default FormEducation
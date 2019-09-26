import React from 'react';


const FormEmployment = (props) => (
  <form >
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Job Title</label>
        <input type="text" class="form-control" name="jobtitle2" value={props.jobtitle2} onChange={props.handleChange} />
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">Company Name</label>
        <input type="text" class="form-control" name="company_name2" value={props.company_name2} onChange={props.handleChange} />
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail4">Start Date: </label>
        <input type="text" class="form-control" name="startdate2" value={props.startdate2} placeholder="dd/mm/yyyy" onChange={props.handleChange} />


      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword4">End Date: </label>
        <input type="text" class="form-control" name="enddate2" value={props.enddate2} placeholder="dd/mm/yyyy" onChange={props.handleChange} />

      </div>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Description </label>
      <textarea class="form-control" id="exampleFormControlTextarea1" value={props.description2} onChange={props.handleChange} name="description2" rows="6"></textarea>
    </div>

  </form>
)

export default FormEmployment
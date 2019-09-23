import React from 'react';
import DatePicker from "react-datepicker";

const Employment = (props) => {
  return (


    <div style={{ padding: '5%' }}>
      <h2><b>Employment </b></h2>
      <h6>The contents of your employment section will largely depend on where you are in life. <br /> If you don't have much work experience, try to put more focus on your skills section. </h6>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Job Title</label>
            <input type="text" class="form-control" name="jobtitle" value={props.jobtitle} onChange={props.handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Company Name</label>
            <input type="text" class="form-control" name="company_name" value={props.company_name} onChange={props.handleChange} />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Start Date</label>
            <input type="text" class="form-control" name="startdate" value={props.startdate} onChange={props.handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">End Date</label>
            <input type="text" class="form-control" name="enddate" value={props.enddate} onChange={props.handleChange} />
          </div>
        </div>



        <button type="submit" class="btn btn-primary" onClick={props.subtractPage} style={{ margin: "10px" }}> Back </button>
        <button type="submit" class="btn btn-primary" onClick={props.addPage}>Continue </button>

      </form>


    </div>



  );
}

export default Employment;

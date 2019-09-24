import React from 'react';

const PersonalDetails = (props) => {
  return (
    <div style={{ padding: '5%' }}>
      <h2><b>Personal Details</b></h2>
      <h6>Lets get started with creating your resume. <br /> Enter your contact details to get started. <br /></h6>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="text" class="form-control" name="pdname" value={props.pdname} onChange={(e) => props.handleChange(e)} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Profession</label>
            <input type="text" class="form-control" name="pdprofession" value={props.pdprofession} onChange={(e) => props.handleChange(e)} />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" name="pdaddress" value={props.pdaddress} onChange={(e) => props.handleChange(e)} />
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Phone</label>
            <input type="text" class="form-control" name="pdphone" value={props.pdphone} onChange={(e) => props.handleChange(e)} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Email</label>
            <input type="text" class="form-control" name="pdemail" value={props.pdemail} onChange={(e) => props.handleChange(e)} />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Website</label>
          <input type="text" class="form-control" name="pdwebsite" value={props.pdwebsite} onChange={(e) => props.handleChange(e)} />
        </div>



        <button type="submit" class="btn btn-primary" onClick={props.addPage}>Continue -> </button>
      </form>


    </div>)
}

export default PersonalDetails;
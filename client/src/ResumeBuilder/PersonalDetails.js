import React from 'react';

const PersonalDetails = (props) => {
  return (
    <div style={{ padding: '5%' }}>
      <h2><b>Personal Details</b></h2>
      <h6>Lets get started with creating your resume. <br /> Enter your contact details to get started. </h6>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Name</label>
            <input type="text" class="form-control" name="name" value={props.name} onChange={props.handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Profession</label>
            <input type="text" class="form-control" name="profession" value={props.name} onChange={props.handleChange} />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" name="address" value={props.name} onChange={props.handleChange} />
        </div>

        <div className="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Phone</label>
            <input type="text" class="form-control" name="phone" value={props.name} onChange={props.handleChange} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Email</label>
            <input type="text" class="form-control" name="email" value={props.name} onChange={props.handleChange} />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Website</label>
          <input type="text" class="form-control" name="website" value={props.name} onChange={props.handleChange} />
        </div>



        <button type="submit" class="btn btn-primary" onClick={props.addPage}>Continue -> </button>
      </form>


    </div>)
}

export default PersonalDetails;
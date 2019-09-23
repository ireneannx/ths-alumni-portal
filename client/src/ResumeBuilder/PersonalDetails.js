import React from 'react';

const PersonalDetails = (props) => {
  return (
    <div style={{ padding: '5%' }}>
      {/* <h1>Personal Details </h1>
      <form onSubmit={props.addPage}>
        <div className="row">
          <div className="col">
            Name: <input name="name" placeholder="name" value={props.name} onChange={props.handleChange} />
          </div>
          <div className="col">
            Profession: <input name="profession" placeholder="profession" value={props.profession} onChange={props.handleChange} />
          </div>
        </div>
        <input name="address" placeholder="address" value={props.address} onChange={props.handleChange} />
        <input name="phone" placeholder="phone" value={props.phone} onChange={props.handleChange} />
        <input name="email" placeholder="email" value={props.email} onChange={props.handleChange} />
        <input name="website" placeholder="website" value={props.website} onChange={props.handleChange} />
        <button type="submit" className="btn btn-primary">Continue</button>
      </form> */}


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



        <button type="submit" class="btn btn-primary">Continue -> </button>
      </form>


    </div>)
}

export default PersonalDetails;
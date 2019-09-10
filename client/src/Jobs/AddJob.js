import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

//import axios from 'axios'

class AddJob extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
      <>
        <div class="container contact">
          <div class="row">
            <div class="col-md-3" style={{ backgroundImage: "url('https://cms-assets.tutsplus.com/uploads/users/107/posts/26488/image/41-space-scrolling-background850.jpg')" }}>


            </div>
            <div class="col-md-9">
              <div class="contact-form">
                <div class="form-group">
                  <label class="control-label col-sm-2">Company</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="enter company name" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3">Available Position/s</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="lname" placeholder="Eg: Front-end" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" >Job Description</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" rows="5" id="comment"></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" >Application link</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" placeholder="Enter application url or company website" name="email" />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3" >Deadline</label>
                  <div class="col-sm-10">
                    <DatePicker class="col-sm-2 form-group"
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      minDate={new Date()}
                    />
                  </div>
                </div>


                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-secondary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddJob
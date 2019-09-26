import React from 'react';
import CompEdu from './CompEdu'
import ComEmp from './CompEmp'
import ComSkills from './ComSkills'
import ComRef from './ComRef'
import ReactToPrint from 'react-to-print'
import { connect } from 'react-redux'

class DownloadResume extends React.Component {
    render() {
        const { resume } = this.props
        return (
            <div className="col-sm-11" style={{ margin: "0 auto", marginTop: "20px" }}>
                <div className="row">
                    <div className="col-sm-3">
                        <h4 style={{ fontWeight: "35" }}><strong>{resume.personalDetails.name}</strong></h4>
                        <p><i>{resume.personalDetails.profession}</i></p><br />

                        <p style={{ marginTop: "-6px" }}>{resume.personalDetails.website}</p>
                        <p style={{ marginTop: "-20px" }}>{resume.personalDetails.email}</p>
                        <p style={{ marginTop: "-20px" }}>{resume.personalDetails.phone}</p><br />

                        <p style={{ marginTop: "-15px" }}>{resume.personalDetails.address}</p>
                    </div>
                    <div className="col-sm-1">

                    </div>

                    <div className="col-sm-7">
                        <div>
                            <h5>SUMMARY</h5>
                            <p>{resume.summary.summary}</p>
                        </div>
                        <div style={{ marginTop: "45px" }}>
                            <CompEdu edu={resume.education}/>
                            <ComEmp emp={resume.employment} />
                            <ComSkills skills={resume.skills} />
                            <ComRef references={resume.references}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



class Print extends React.Component {

    render() {
        console.log("****&^%^$%^&*$%%^&")
        return (
            <div className="d-print-none">
                <ReactToPrint
                    trigger={() => <button className="btn btn-info" style={{ marginLeft: "6%" }} href="#">Print your resume</button>}
                    content={() => this.componentRef}
                />
                <DownloadResume resume={this.props.resume} ref={el => (this.componentRef = el)} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        resume: state.Resume
    }
}
export default connect(mapStateToProps)(Print);
import React, { useRef } from 'react';
import CompEdu from './CompEdu'
import ComEmp from './CompEmp'
import ComSkills from './ComSkills'
import ComRef from './ComRef'
import ReactToPrint from 'react-to-print'

class DownloadResume extends React.Component {
    render() {
        return (
            <div className="col-sm-11" style={{ margin: "0 auto", marginTop: "20px" }}>
                <div className="row">
                    <div className="col-sm-3">
                        <h4 style={{ fontWeight: "35" }}><strong>PAMPA MANDAL</strong></h4>
                        <p><i>Fullstack Developer</i></p><br />

                        <p style={{ marginTop: "-6px" }}>pampamandal.com</p>
                        <p style={{ marginTop: "-20px" }}>pampamandal@gmail.com</p>
                        <p style={{ marginTop: "-20px" }}>9474634599</p><br />

                        <p style={{ marginTop: "-15px" }}>Majhigram, Panrui, West Bengal</p>
                    </div>
                    <div className="col-sm-1">

                    </div>

                    <div className="col-sm-7">
                        <div>
                            <h5>SUMMARY</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus id nibh iaculis, sed vehicula tellus lobortis. Nunc eget laoreet enim. Nullam pulvinar tortor ut massa vulputate dapibus. Donec eros nisi, blandit id ante et, ullamcorper egestas ligula. Praesent iaculis blandit cursus. Praesent condimentum fermentum blandit. Curabitur lobortis tempor viverra. Curabitur iaculis orci urna, ac luctus purus sollicitudin ac. Curabitur in erat in leo malesuada porta. Sed commodo eros pulvinar semper eleifend. Mauris pellentesque libero vel porttitor ullamcorper.</p>
                        </div>
                        <div style={{ marginTop: "45px" }}>
                            <CompEdu />
                            <ComEmp />
                            <ComSkills />
                            <ComRef />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Print extends React.Component {
    render() {
        return (
            <div className="d-print-none">
                <ReactToPrint
                    trigger={() => <button className="btn btn-info" style={{marginLeft : "6%"}} href="#">Print your resume</button>}
                    content={() => this.componentRef}
                />
                <DownloadResume ref={el => (this.componentRef = el)} />
            </div>
        )
    }
}
export default Print;
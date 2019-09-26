import React from 'react';

const CompEmp = (props) => {
    const { emp } = props

    if (emp.jobtitle === "")
        return (
            null
        )
    else if (emp.jobtitle2 === "")
        return (
            <div style={{ marginTop: "43px" }}>
                <h5>EMPLOYMENT</h5>
                <p style={{ marginBottom: "5px" }}><i>{emp.company_name}</i></p>
                <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle}</strong>/{emp.startdate} -- {emp.enddate}</p>
                <p>{emp.description}</p>

            </div>
        )
    else if (emp.jobtitle3 === "")
        return (
            <div style={{ marginTop: "43px" }}>
            <h5>EMPLOYMENT</h5>
            <p style={{ marginBottom: "5px" }}><i>{emp.company_name}</i></p>
            <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle}</strong>/{emp.startdate} -- {emp.enddate}</p>
            <p>{emp.description2}</p>
            <p style={{ marginBottom: "5px" }}><i>{emp.company_name2}</i></p>
            <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle2}</strong>/{emp.startdate2} -- {emp.enddate2}</p>
            <p>{emp.description2}</p>

        </div>

    )
    else
        return (
        
            <div style={{ marginTop: "43px" }}>
            <h5>EMPLOYMENT</h5>
            <p style={{ marginBottom: "5px" }}><i>{emp.company_name}</i></p>
            <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle}</strong>/{emp.startdate} -- {emp.enddate}</p>
            <p>{emp.description2}</p>
            <p style={{ marginBottom: "5px" }}><i>{emp.company_name2}</i></p>
            <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle2}</strong>/{emp.startdate2} -- {emp.enddate2}</p>
            <p>{emp.description2}</p>
            <p>{emp.description3}</p>
            <p style={{ marginBottom: "5px" }}><i>{emp.company_name3}</i></p>
            <p style={{ marginTop: "-7px" }}><strong>{emp.jobtitle3}</strong>/{emp.startdate3} -- {emp.enddate3}</p>
            <p>{emp.description3}</p>
        </div>

    )
}

export default CompEmp;
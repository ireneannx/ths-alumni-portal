import React from 'react';

const CompEdu = (props) => {
    const {edu} =   props
    if(edu.schoolname === "")
    return (
        null
    )
    else if (edu.schoolname2 === "")
    return ( 
        <div>
            <h5>EDUCATION</h5>
            <p style={{marginBottom : "5px"}}><i>{edu.schoolname}</i></p>
            <p style={{marginTop : "-7px"}}><strong>{edu.degree}</strong>/{edu.startdate} -- {edu.enddate}</p>
            <p>{edu.description}</p>
            
        </div>
     )
    else 
    return (
        <div>
        <h5>EDUCATION</h5>
            <p style={{marginBottom : "5px"}}><i>{edu.schoolname}</i></p>
            <p style={{marginTop : "-7px"}}><strong>{edu.degree}</strong>/{edu.startdate} -- {edu.enddate}</p>
            <p>{edu.description}</p>

            <p style={{marginBottom : "5px"}}><i>{edu.schoolname2}</i></p>
            <p style={{marginTop : "-7px"}}><strong>{edu.degree2}</strong>/{edu.startdate2} -- {edu.enddate2}</p>
            <p>{edu.description2}</p>
            </div>
    )
}
 
export default CompEdu;
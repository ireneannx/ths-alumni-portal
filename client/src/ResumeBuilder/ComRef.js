import React from 'react';

const ComRef = (props) => {
    const {references} = props
    if(references.name === "")
    return (
        null
    )
    else if (references.name2 === "")
    return ( 
        <div style={{marginTop : "43px"}}>
            <h5>REFERENCES</h5>
            <p style={{paddingTop: "10px"}}><i>{references.name}, {references.title}</i></p>
            <p style={{marginTop : "-7px"}}>{references.email}</p>
            <p style={{marginTop : "-18px"}}>{references.phone}</p>
            <p style={{marginTop : "-18px"}}>{references.location}</p>
        </div>
     )
    else
    return (
        <div style={{marginTop : "43px"}}>
        <h5>REFERENCES</h5>
        <p style={{paddingTop: "10px"}}><i>{references.name}, {references.title}</i></p>
        <p style={{marginTop : "-7px"}}>{references.email}</p>
        <p style={{marginTop : "-18px"}}>{references.phone}</p>
        <p style={{marginTop : "-18px"}}>{references.location}</p>
        <p style={{paddingTop: "10px"}}><i>{references.name2}, {references.title2}</i></p>
        <p style={{marginTop : "-7px"}}>{references.email2}</p>
        <p style={{marginTop : "-18px"}}>{references.phone2}</p>
        <p style={{marginTop : "-18px"}}>{references.location2}</p>

    </div>

    )
}
 
export default ComRef;
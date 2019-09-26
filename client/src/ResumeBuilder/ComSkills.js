import React from 'react';

const ComSkills = (props) => {
    const { skills } = props
    if (skills.skill === "")
        return (
            null
        )
    else if (skills.skill2 === "")
        return (
            <div style={{ marginTop: "43px" }}>
                <h5>SKILLS</h5>
                <div className="md-sm-8">
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    else if (skills.skill3 === "")
        return (
            <div style={{ marginTop: "43px" }}>
                <h5>SKILLS</h5>
                <div className="md-sm-8">
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency2}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill2}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    else
        return (
            <div style={{ marginTop: "43px" }}>
                <h5>SKILLS</h5>
                <div className="md-sm-8">
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency2}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill2}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>{skills.proficiency3}</strong></p>
                        </div>
                        <div className="col">
                            <p>{skills.skill3}</p>
                        </div>
                    </div>


                </div>
            </div>

        )
}

export default ComSkills;
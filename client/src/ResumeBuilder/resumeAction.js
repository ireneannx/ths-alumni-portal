export const addPersonalDetails = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_PERSONAL_FIELD",
        payload: data
    })
    addPage()
}

export const addEmployment = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_EMPLOYMENT_FIELD",
        payload: data
    })
    addPage()
}

export const addEmploymentExtra = (data, next) => async dispatch => {
    dispatch({
        type: "ADD_EMPLOYMENT_FIELD",
        payload: data
    })
    next()
}

export const addSkills = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_SKILLS_FIELD",
        payload: data
    })
    addPage()
}

export const addEducation = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_EDUCATION_FIELD",
        payload: data
    })
    addPage()
}

export const addEducationExtra = (data, next) => async dispatch => {
    dispatch({
        type: "ADD_EDUCATION_FIELD",
        payload: data
    })
    next()
}

export const addSummary = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_SUMMARY_FIELD",
        payload: data
    })
    addPage()
}

export const addReferences = (data, addPage) => async dispatch => {
    dispatch({
        type: "ADD_REFERENCES_FIELD",
        payload: data
    })
    addPage()
}
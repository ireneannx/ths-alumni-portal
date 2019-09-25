export function addPersonalDetails(data) {
    return dispatch({
        type: "ADD_PERSONAL_FIELD",
        payload: data
    })
}
export function addEmployment(data) {
    return dispatch({
        type: "ADD_EMPLOYMENT_FIELD",
        payload: data
    })
}
export function addSkills(data) {
    return dispatch({
        type: "ADD_SKILLS_FIELD",
        payload: data
    })
}
export function addEducation(data) {
    return dispatch({
        type: "ADD_EDUCATION_FIELD",
        payload: data
    })
}
export function addSummary(data) {
    return dispatch({
        type: "ADD_SUMMARY_FIELD",
        payload: data
    })
}
export function addReferences(data) {
    return dispatch({
        type: "ADD_REFERENCES_FIELD",
        payload: data
    })
}
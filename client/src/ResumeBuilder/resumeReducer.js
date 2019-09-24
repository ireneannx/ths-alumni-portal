const initialState = {
    personalDetails: [],
    employment: [],
    skills: [],
    education: [],
    summary: [],
    references: []
}

const Resume = function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PERSONAL_FIELD":
            return {
                ...state, personalDetails: [...state.personalDetails, action.payload]   
            }
        case "ADD_EMPLOYMENT_FIELD":
            return {
                ...state, employment: [...state.employment, action.payload]   
            }
        case "ADD_SKILLS_FIELD":
            return {
                ...state, skills: [...state.personalDetails, action.payload]   
            }
        case "ADD_EDUCATION_FIELD":
            return {
                ...state, education: [...state.education, action.payload]   
            }
        case "ADD_SUMMARY_FIELD":
            return {
                ...state, summary: [...state.summary, action.payload]   
            }
        case "ADD_REFERENCES_FIELD":
            return {
                ...state, references: [...state.references, action.payload]   
            }
        default:
            return { ...state }
    }
}

export default Resume
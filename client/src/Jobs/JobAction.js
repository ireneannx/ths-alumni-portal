//import axios from 'axios'

export const getJobs = () => {
  return function (dispatch) {
    const res = {
      data: [{
        _id: 12345,
        job_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut malesuada ante.",
        upvote_count: "12",
        company_name: "The Hacking School",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "front-end",
        user_id: 1

      },
      {
        _id: 123225,
        job_description: " Quisque sit amet finibus erat, in faucibus ipsum. Morbi nec massa mauris.",
        upvote_count: "122",
        company_name: "Google",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "cloud architect",
        user_id: 1
      },
      {
        _id: 12345,
        job_description: "some random description",
        upvote_count: "12",
        company_name: "The Hacking School",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "front-end",
        user_id: 1

      },
      {
        _id: 123225,
        job_description: "Nullam mollis mauris at magna aliquam, eget vestibulum dui ornare. Fusce quis lorem augue. ",
        upvote_count: "122",
        company_name: "Google",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "cloud architect",
        user_id: 1
      },
      {
        _id: 12345,
        job_description: "m, dignissim sed tristique quis, rutrum at purus. Aenean venenatis lacus in sapien varius facilisis. Praesent sed",
        upvote_count: "12",
        company_name: "The Hacking School",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "front-end",
        user_id: 1

      },
      {
        _id: 123225,
        job_description: "Duis eget tortor ut orci sagittis dictum sed vitae leo. Cras et mattis ante.",
        upvote_count: "122",
        company_name: "Google",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "cloud architect",
        user_id: 1
      },
      {
        _id: 12345,
        job_description: "Quisque consequat porttitor cursus. Nam cursus, sapien congue blandit tempus, ante odio tincidunt metus, nec lobortis lacus nibh eget augue. Aenean tincidunt, lorem non aliquet semper",
        upvote_count: "12",
        company_name: "The Hacking School",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "front-end",
        user_id: 1

      },
      {
        _id: 123225,
        job_description: "Pellentesque molestie purus erat, nec laoreet dui efficitur ut.",
        upvote_count: "122",
        company_name: "Google",
        url: "https://internshala.com/internship/detail/human-resources-hr-internship-in-hyderabad-at-expertease-software-india-private-limited1567485738",
        job_type: "cloud architect",
        user_id: 1
      }]
    }

    return dispatch({
      type: "GET_JOBS",
      payload: res.data
    })
  }
}
import React from 'react';

class Summary extends React.PureComponent {
    state = {
        summary: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();


    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            summary: e.target.value
        })
    }

    render({ addPage, subtractPage } = this.props) {

        return (
            <div style={{ padding: '5%' }}>

                <h2><b>Summary</b></h2>
                <h6>Your summary should showcase the highlights of your work experience, skills, and your best achievements. </h6><br /><br />

                <form onSubmit={(e) => this.handleSubmit(e)}>

                    <div class="form-group">

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name="summary" onChange={this.handleChange} placeholder="Write your summary here ..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={subtractPage} style={{ margin: "10px" }}> Back </button>
                    <button type="submit" class="btn btn-primary" onClick={addPage}>Continue </button>
                </form>


            </div >)
    }
}

export default Summary;
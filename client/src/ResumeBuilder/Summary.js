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
                <h6>Your summary should showcase the highlights of your<br /> work experience, skills, and your best achievements. </h6>

                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="form-row" >

                        <div className="row" style={{ marginTop: '20px', marginBottom: '10px' }}>
                            <div className="col">
                                <div class="card">
                                    <div className="card-body" style={{ width: '400px', minHeight: '150px', padding: '-3px' }}>
                                        <p style={{ height: '15px' }}>Write your summary here</p> <hr />

                                        <div class="form-group">
                                            <textarea class="form-control" onChange={(e)=>this.handleChange(e)} rows="6" name="summary" value={this.state.summary} style={{border: 'none'}}></textarea>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>


                    <button type="submit" class="btn btn-primary" onClick={subtractPage} style={{ margin: "10px" }}> Back </button>
                    <button type="submit" class="btn btn-primary" onClick={addPage}>Continue </button>
                </form>


            </div>)
    }
}

export default Summary;
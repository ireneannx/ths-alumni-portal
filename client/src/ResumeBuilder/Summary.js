import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSummary } from './resumeAction';

class Summary extends React.PureComponent {
    state = {
        summary: ''
    }
    componentDidMount() {
        this.setState({
            summary: this.props.summary.summary
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let data = this.state
        // console.log('for resume', data)

        await this.props.addSummary(data, this.props.addPage)
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

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" name="summary" value={this.state.summary} onChange={this.handleChange} placeholder="Write your summary here ..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={subtractPage} style={{ margin: "10px" }}> Back </button>
                    <button type="submit" class="btn btn-primary" >Continue </button>
                </form>


            </div >)
    }
}

const mapStateToProps = (state) => {
    return {
        summary: state.Resume.summary
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addSummary
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
import React from 'react'
import { connect } from 'react-redux'
import { getSampleText } from '../store/actions/textActions'


const Output = props => {
    return (
        <div className="my-5">
            <textarea
                rows={props.text.length / 100}
                className="no-scroll-bar form-control p-4"
                readOnly
                value={props.text} />
        </div>
    )
}


const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { getSampleText })(Output)
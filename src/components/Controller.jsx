import React, { useEffect, useState } from 'react'
import { getSampleText } from '../store/actions/textActions'
import { connect } from 'react-redux'

const Controller = props => {

    const [para, setPara] = useState(4)
    const [html, setHtml] = useState(false)

    useEffect(() => {
        props.getSampleText(para, html)
    }, [para, html, props])

    return (
        <form className="form-inline">

            <div className="form-group">
                <label>No. of Para (0-150)</label>
                <input
                    className="form-control"
                    type="number"
                    name="para"
                    value={para}
                    onChange={(e) => setPara(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="htmlSelect">Include HTML</label>
                <select
                    className="form-control"
                    onChange={(e) => setHtml(e.target.value)}
                    name="htmlSelect"
                    id="htmlSelect"
                    value={html}
                >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </div>
        </form>
    )
}


export default connect(null, { getSampleText })(Controller)
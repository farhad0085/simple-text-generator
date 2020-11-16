import { PropagateLoader } from 'react-spinners'
import React from 'react';


const Loading = ({ size, color }) => {

    const spinnerColor = color ? color : "#123abc"

    return (
        <div className="d-flex justify-content-center">
            <PropagateLoader size={size} color={spinnerColor} />
        </div>
    )

}


export default Loading
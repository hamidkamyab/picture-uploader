import React from 'react'

function ProgressBar({UploadProgress}) {
    return (
        <div className="progress progress-sm" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: `${UploadProgress}%` }}>
                {UploadProgress}%
            </div>
        </div>
    )
}

export default ProgressBar
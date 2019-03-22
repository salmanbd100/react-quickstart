import React from 'react'
import { connect } from 'react-redux'

const Count = (props) => {
    return (
        <div>
            <p>{props.count}</p>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Count);
import React from 'react'

export const Comment = (props) => {
    const { comment } = props
    return(
        <div>
            { comment.text }
        </div>
    )
}
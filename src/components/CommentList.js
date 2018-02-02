import React, { Component } from 'react';
import { Comment } from "./Comment";

export class CommentList extends Component {

    render() {
        const commentElement = this.props.comments ? (this.props.comments.map((comment) => {
            return(
                <li key={comment.id} >
                    <Comment comment={comment}/>
                </li>
            )
        })) : (
            <li>
                <h3>no comments yet</h3>
            </li>
        );
        return(
            <ul>
                {commentElement}
            </ul>
        )
    };
}
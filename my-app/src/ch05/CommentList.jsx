import React from 'react';
import Comment from './Comment';


const comments = [
  {
    name: "김태인",
    comment: "안녕하세요",
  },
  {
    name: "유재석",
    comment: "안녕하세요",
  },
  {
    name: "강민경",
    comment: "안녕하세요",
  }
];

function CommentList(props){
    return(
      <div>
        {comments.map((comment)=>{
          return(
            <Comment name={comment.name} comment={comment.comment} />
          );
        })}
      </div>
    );
}
export default CommentList;
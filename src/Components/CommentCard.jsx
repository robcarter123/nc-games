import CommentContainer from "./CommentContainer";

const CommentCard = ({ review_id, review_author, comment, users }) => {
  
    let userName = `${comment.author}`;
  
    return (
      <div className={`card-style`}>
        <div className="comment-text">
          <p className="commentor">{`${userName} says:`}</p>
          <p className="comment-body">{comment.body}</p>
        </div>
      </div>
    );
  };
  
  export default CommentCard;

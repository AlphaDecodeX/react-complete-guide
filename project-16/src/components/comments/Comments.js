import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CommentsList from "./CommentsList"
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { quoteId } = params;
  const { sendRequest, status, data: loadedComments } =
    useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  },
    [quoteId, sendRequest])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = () => {
    let comments;

    if (status === 'pending') {
      comments = <div className='centered'><LoadingSpinner /></div>
    }

    if (status === 'completed' && loadedComments) {
      comments = <CommentsList comments />
    }
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId}
        onAddedComment={addedCommentHandler}
      />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;

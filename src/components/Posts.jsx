import React from 'react';
import PropTypes from 'prop-types';
import Counter from './ThumbsUp';

function Post(props) {

  let thumbsUp = {
    width: '25px',
    height: '25px',
    backgroundColor: 'black'
  };

  let thumbsDown = {
    width: '25px',
    height: '25px',
    backgroundColor: 'black'

  };

  let container = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  };

  return (
    <div style={container}>
      <p>{props.post}</p>
      <p>{props.time}</p>
      <Counter/>
    </div>
  );
}
Post.propTypes = {
  text: PropTypes.string,
  thumbsUp: PropTypes.number,
  thumbsDown: PropTypes.number
};

export default Post;

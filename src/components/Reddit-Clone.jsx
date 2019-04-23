import React from 'react';
import MakePost from './MakePost';
import PostList from './PostList';
import Counter from './ThumbsUp';





class RedditClone extends React.Component {

  constructor() {
    super();
    this.state = {
      masterPostList: [],
      thumbsUp: 0,
    };
    this.handleAddingNewPostsToPostList = this.handleAddingNewPostsToPostList.bind(this);
  }

  handleAddingNewPostsToPostList(newPost){
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }


  render(){
    return (
      <div>
        <MakePost  onNewPostCreation={this.handleAddingNewPostsToPostList} />
        <PostList postList={this.state.masterPostList} />

      </div>
    );
  }
}

export default RedditClone;

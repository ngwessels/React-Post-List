import React, { Component}  from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';


class PostList extends React.Component{
  array;
  adjustedArray;
  constructor(props) {
    super(props);
  }

  sort() {
    let that = this;
    this.array = {};

    console.log("1st");
    const length = that.props.postList.length;
    that.array = that.props;
    if(this.props.postList.length > 2) {
      for(let i = 0; i < this.array.postList.length; i++) {
        console.log(this.array.postList[0].milli + " and " + this.array.postList[1].milli)
        if(this.array.postList[i + 1]) {
          if(this.array.postList[i].milli < this.array.postList[i + 1].milli) {
            // that.array.postList.insert(i, this.array.postList[i])
            // that.array.postList.splice(i, 0, this.array.postList[i]);
            // this.array.
          }

        }
      }

    }
  }



  render(){
    let that = this;
    console.log(this.props);
    that.sort()
    console.log(that.array);
    return (
      <div>
        <hr/>
          {that.array.postList.map((post, index) =>
            <Posts post={post.post}
            key={post.id} time={post.time} milli={post.milli}/>
            )}
        </div>
    );
  }
}
PostList.propTypes = {
  postList: PropTypes.array
};
export default PostList;

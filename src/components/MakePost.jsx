import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


class MakePost extends React.Component{

  constructor(props) {
    super(props);

    let propsTypes = {
      annualSalary: 0
    };
  }
  getTime() {
    const today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
  }
  getMilli() {
    const milli = new Date();
    let time = milli.getTime();
    return time;
  }

  handleNewPost(_post) {
    const time = this.getTime();
    const milli = this.getMilli();
    this.props.onNewPostCreation({post: _post.value, time: time, milli: milli, id: v4()});
    _post.value = '';
  }
  render() {
    let _post =null;
    return (
      <div>
        <div>

          <form>
            <div>
              <input placeholder='What&apos;s happening?' type='text'
                ref={(input) => {_post = input;}}/>
            </div>
          </form>
          <button type='submit' onClick={() => {this.handleNewPost(_post);}}>Post</button>
        </div>
      </div>
    );
  }
}

export default MakePost;

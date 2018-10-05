import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>waiting</div>;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  console.log(ownProps.match);
  return { post: posts[ownProps.match.params.id] };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);

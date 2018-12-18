import React from "react";
import { connect } from "react-redux";

const Blog = (blog) => {
  return (
    <div>
      <h1>{blog.name}</h1>
    </div>
  );
};

const mapStateToProps = state => ({ blog: state.blog })
  

export default connect(mapStateToProps)(Blog);

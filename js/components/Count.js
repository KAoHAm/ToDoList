import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
 };
 
 const ConnectedCount = ({ articles }) => (
<p>{articles.length}</p>
);

const Count = connect(mapStateToProps)(ConnectedCount);
export default Count;
//import React, { Component } from "react";
import React from "react";
//class based
// export class NewsItem extends Component
//function based is there any this. just erace that line
const NewsItem = (props) => {
  //class based
  // render() {
  let { title, source, description, imageUrl, newsUrl, author, newsdate } =
    //class based
    // this.props
    //function based
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {source}
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ80Yj8Heopyf1fKaK5fCb0fAuNAF93rBoUKQ&s"
              : imageUrl
          }
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on{" "}
              {new Date(newsdate).toGMTString()}...{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  //}
};

export default NewsItem;

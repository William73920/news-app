import React, { useState } from "react";

const NewsItem = ({
  title,
  description,
  imgUrl,
  Url,
  author,
  source,
  published,
}) => {
  const date = new Date(published);

  return (
    <div className="card">
      <span className="position-absolute badge text-bg-danger">{source}</span>
      <img
        src={
          imgUrl
            ? imgUrl
            : "https://i.ytimg.com/vi/vfRTlFCLzH4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBuWxfxuX8-353mDFD3DM2haoOSEA"
        }
        className="card-img-top mh-75"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <figcaption className="blockquote-footer">
          Written By{" "}
          <cite title="Source Title">{author ? author : "unknown"}</cite>
        </figcaption>
        <p style={{ fontSize: "12px" }} className="text-muted">
          {date.toGMTString()}
        </p>
        <a href={Url} className="btn btn-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

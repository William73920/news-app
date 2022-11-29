import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ pageSize, country, category }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(true);

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d87b5e71f04645ddbf1fd70f2f4f67be&page=${page}&pageSize=${pageSize}`;

  const fetchApi = async () => {
    setLoading(true);
    await fetch(url)
      .then((r) => r.json())
      .then((data) => {
        console.log(data.articles);
        setArticles(data.articles);
        setResults(Math.ceil(data.totalResults));
        setLoading(false);
      });
  };

  const handlePrevClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d87b5e71f04645ddbf1fd70f2f4f67be&page=${
      page - 1
    }&pageSize=${pageSize}`;

    const fetchApi = async () => {
      setLoading(true);
      await fetch(url)
        .then((r) => r.json())
        .then((data) => {
          console.log(data.articles);
          setArticles(data.articles);
          setLoading(false);
        });
    };
    fetchApi();

    setPage(page - 1);
  };

  const handleNextClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d87b5e71f04645ddbf1fd70f2f4f67be&page=${
      page + 1
    }&pageSize=${pageSize}`;

    const fetchApi = async () => {
      setLoading(true);
      await fetch(url)
        .then((r) => r.json())
        .then((data) => {
          console.log(data.articles);
          setArticles(data.articles);
          setLoading(false);
        });
    };
    fetchApi();

    setPage(page + 1);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container my-3">
      <h2>NewsDaily - Top Headlines</h2>
      <div className="d-flex justify-content-center">
        {loading && <ClimbingBoxLoader />}
      </div>

      {!loading && (
        <div className="row my-3">
          {articles.map((data, index) => (
            <div className="col-md-4 my-1">
              <NewsItem
                title={data.title ? data.title : ""}
                description={data.description ? data.description : ""}
                imgUrl={data.urlToImage}
                Url={data.url}
                author={data.author}
                source={data.source.name}
                published={data.publishedAt}
              />
            </div>
          ))}
        </div>
      )}

      <div className="my-3 container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark "
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button
          disabled={page >= results / pageSize}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default News;

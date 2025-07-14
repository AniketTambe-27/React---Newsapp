import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component
const News = (props) => {
  const { searchQuery, triggerSearch, apiKey, pageSize, country, category } =
    props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  //class based
  // static defaultProps = {
  //   country: "us",
  //   pageSize: 8,
  //   category: "general",
  // };

  // static propTypes = {
  //   counrty: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // };

  const captalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // constructor(props){
  //   super(props);
  //   // console.log("Hello I am a Constructor from News Component");
  //  //class based
  //   this.state = {
  //     articles: [],
  //     // articles: this.articles,
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //   };
  //    document.title = `${this.captalizeFirstLetter(props.category)} - AniketNews`;
  // }
  // class based
  // async updateNews()
  //function based
  const updateNews = async () => {
    //in function based convert all this.props to props
    props.setProgress(10);
    //// const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    //class based
    // this.setState({ loading: true });
    //function based
    setLoading(true);

    let url = "";
    if (searchQuery.trim() !== "") {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        searchQuery
      )}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    }

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    // console.log(parsedData);
    //function based
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
    //class based
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    props.setProgress(100);
  };
  //function based
  useEffect(() => {
    document.title = `${captalizeFirstLetter(props.category)} - AniketNews`;
    updateNews();
    //eslint-disable-next-line
  }, [triggerSearch]);
  //class based
  // async componentDidMount() {
  //   // console.log("cdm");
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=91bcb96239904afba6cc0066ed93d2cf&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data =await fetch(url)
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading : false})
  //   this.updateNews();
  // }
  // to make class based remove const //to make function based use const
  // const handlePreviousClick = async () => {
  //   //console.log("Previous")
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=91bcb96239904afba6cc0066ed93d2cf&page=${this.state.page} - 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data =await fetch(url)
  //   // let parsedData = await data.json()
  //   // console.log(parsedData);
  //   // // this.setState({articles: parsedData.articles})

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading :false
  //   //})
  //   // class based
  //   //this.setState({ page: this.state.page - 1 });
  //   //function based
  //   setPage(page - 1);
  //   updateNews();
  // };
  // to make class based remove const //to make function based use const
  // const handleNextClick = async () => {
  //   // console.log("Next");
  //   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)))
  //   //   {

  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=91bcb96239904afba6cc0066ed93d2cf&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data =await fetch(url)
  //   // let parsedData = await data.json()
  //   // // this.setState({loading: false});
  //   // // console.log(parsedData);
  //   // // this.setState({articles: parsedData.articles})

  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles,
  //   //   loading : false
  //   //    })

  //   // }
  //   //class based
  //   // this.setState({ page: this.state.page + 1 });
  //   //function based
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 });

    //  // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    // this.setState({loading: true});
  
    let url = "";

    if (searchQuery.trim() !== "") {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        searchQuery
      )}&apiKey=${apiKey}&page=${setPage}&pageSize=${pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${setPage}&pageSize=${pageSize}`;
    }
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    //function based
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(setPage);
    setLoading(false);
    //class based
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    //   // loading : false,
    // });
  };
  //class based
  // render() {
  // console.log("render")
  return (
    <div>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Aniket<span className="text-danger">News</span> - Top{" "}
        <span className="text-danger">{" "}{captalizeFirstLetter(props.category)}{" "}
        </span>
        Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        // hasMore={articles.length !== totalResults}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={`${element.url} ${element.publishedAt} ${index}`}>
                  <NewsItem
                    title={element.title ? element.title /*.slice(0, 52)*/ : ""}
                    description={
                      element.description
                        ? element.description /*.slice(0, 88)*/
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    newsdate={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
                 <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> 
                </div>  */}
    </div>
  );
  // }
};

// in function based we write default props and propType in bottom

News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  counrty: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;

import { useEffect} from "react";


export default function Body({articles, setArticles}) {
  
  const key = "MsizsdhSEKS7CmsYfeSI6HeBVhNOYqcR";
  const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=";

  useEffect(() => {
    const homePage = () => {
      fetch(url + key)
        .then((res) => res.json())
        .then((data) => {
          setArticles(data.results);
        });
    };

    homePage();
  }, [articles, setArticles]);


 const story = articles.map((article, index)=> {

    return <div key ={index} className="col-md-4">
<div className="card m-2 rounded-0">
  <img className="card-img-top rounded-0" src={article.multimedia[1].url} alt="Card cap"/>
  <div className="card-body">
    <h4 className="card-title">{article.title}</h4>
    <p className="card-text">
      {article.byline}
    </p>
    <p className="card-text">
      {article.abstract}
    </p>
    <a className="card-text" href={article.url}>
      Read more
    </a>
  </div>
</div>
    </div>
 })

 
  return <div> 
    <div className="container-fluid">
        <div className="row">
        {story} </div>

    </div>
   
  </div>}

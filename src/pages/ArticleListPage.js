import React from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";


const ArticleListPage= ()=>{
   
    return(
    <>
    <h1>Articles</h1>
    <div className="article-list">
    <ArticlesList props={articleContent}/>
    </div>
    </>
    )
    }
export default ArticleListPage;

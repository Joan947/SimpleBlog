import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import articleContent from './article-content';
import ArticlesList from "../components/ArticlesList";
import Whoops404 from "./404page";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import AddCommentForm from "../components/AddComment";
const ArticlePage= ()=>{
    const {name} = useParams();
    const article = articleContent.find(article =>article.name===name);
    const [articleInfo, setArticleInfo]= useState({upvotes:0,comments:[]});
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await fetch(`/api/articles/${name}`);
           // get response body from data fetched
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);   
        }
        fetchData();
    },[name]);
    if(!article ){ 
    return (
    <>
     <Whoops404/>
     <h3>Please return to ArticlePage</h3>
    </>
    );}
    const otherArticles = articleContent.filter(article => article.name !== name);
  
    return(
    <>
    <h1> {article.title} </h1>
    <UpvotesSection 
        articleName ={name} 
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}/>
        <img className="img-box"
        src={process.env.PUBLIC_URL + article.image}
        />
    {article.content.map((paragraph,key)=>
    <p key={key}>{paragraph}</p>)}
    <CommentsList comments= {articleInfo.comments}/>
    <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
    <h3>Related Articles</h3>
    <div className="related-articles">
    <ArticlesList props={otherArticles} />
    </div>
    </>
    );
}

export default ArticlePage;

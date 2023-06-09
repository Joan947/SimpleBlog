import React, { useState } from "react";

const AddCommentForm = ({articleName,setArticleInfo})=>{
    const[username, setUsername] = useState('');
    const[commentText, setCommentText]= useState('');
    // remember to include headers when sending post requests with json body to the server
    const addComment = async()=>{
        const result = await fetch(`/api/articles/${articleName}/add-comment`,
       { method:'post',
        body: JSON.stringify({username,text:commentText}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername('');
    setCommentText('');
    }
    return(
    <form id="add-comment-form">
        <h3> Add a Comment</h3>
        <label>
            Name:
            <input type= "text" value={username} onChange={(event) =>setUsername(event.target.value)}/>
        </label>
        <label>
            Add Comment:
        <textarea rows="4" cols="50" value={commentText} onChange={(event) =>setCommentText(event.target.value)}/>
        <button onClick={()=>addComment()}>Add Comment</button>
        </label>
    </form>

);}


export default AddCommentForm;

import React from "react";

function helper(stuff){
    if (stuff == null){
        return "January 1, 1970";
    }
    else return stuff;
}

function Article (props){
return <article>
    <h3>{props.title}</h3>
    <small>{helper(props.date)}</small>
    <p>{props.preview}</p>
</article>
}

export default Article;
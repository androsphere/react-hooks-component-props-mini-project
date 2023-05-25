import React from "react";
function helper(stuff){
    if (stuff == null){
        return "https://via.placeholder.com/215";
    }
    else return stuff ;
}
function About(props){
return <aside>
    <img src = {helper(props.image)} alt = "blog logo"/>
    <p>{props.about}</p>
</aside>
}

export default About;
import React from "react";

function Article({
  title,
  date="January 1, 1970",
  preview,
  minutes
}){

  function displayEmoji(minutes){
    if(minutes>=30){
      let numRepeat = Math.round((minutes/10))
      return <span>{`${"🍱".repeat(numRepeat)} ${minutes} min read`}</span>
    }else{
      let numRepeat = Math.round((minutes/5))
      return <span>{`${"☕️".repeat(numRepeat)} ${minutes} min read`}</span>
    }
  }
  return(
    <article>
      <h3>{title}</h3>
      <small>{date}. {displayEmoji(minutes)}</small> 
      <p>{preview}</p>
    </article>
  );
}

export default Article
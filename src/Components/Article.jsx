import React from 'react'

function Article(props) {
    return(
        <div>
            <h3>{ props.title }</h3>
            <body>{ props.body }</body>
        </div>
    )
}

export default Article;
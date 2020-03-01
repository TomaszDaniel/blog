import React from 'react';

import Article from '../components/Article/Article'

const ArticleList = (props) => {

    const dummyArticle = [
        {
            title: "Artykuł 1",
            author: "Jan Kowalski",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora nihil at, aliquam, iusto quas ut minus doloremque facilis aspernatur, ea numquam saepe vitae dolore ab sunt. Repellat, quos consequatur."
        },
        {
            title: "Artykuł 2",
            author: "Jan Kowalski",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora nihil at, aliquam, iusto quas ut minus doloremque facilis aspernatur, ea numquam saepe vitae dolore ab sunt. Repellat, quos consequatur."
        },
        {
            title: "Artykuł 3",
            author: "Jan Kowalski",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempora nihil at, aliquam, iusto quas ut minus doloremque facilis aspernatur, ea numquam saepe vitae dolore ab sunt. Repellat, quos consequatur."
        },
    ]

    let articleList = dummyArticle.map((article, i) => (
        <Article key={i} title={article.title} author={article.author} text={article.text} />
    ))

    let listOfArticles = dummyArticle.map((article, i) => (
        <Article key={i} list title={article.title} author={article.author} text={article.text} />
    ))


    return (
        <>
            {(props.list) ? listOfArticles
                :
                <div className="d-flex align-items-center flex-column">
                    {articleList}
                </div>}
        </>
    )
}


export default ArticleList
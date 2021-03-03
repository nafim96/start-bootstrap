
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeading = () => {
    const [articles, setArticles] = useState([])
    useEffect(async () => {
        const key = `ea54278051f84078a47ef170118fd2dc`;
        const url = `http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=${key}`;
        try {
            const promise = await fetch(url);
            const data = await promise.json();
            setArticles(data.articles)
        }
        catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div>
            <h1>Top Head Line: {articles.length}</h1>
            {
                articles.map(article=> <News article={article} ></News>)
            }
        </div>
    );
};

export default TopHeading;
import React, { useState, useEffect } from 'react';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './styles';

import NewsCards from './components/NewsCards/NewsCards';

const alanKey = '2ae64469f7ea9365acb8bd260061228d2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                  } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                  } else if (command === 'open') {
                    console.log(number);
                    window.open(articles[number].url, '_blank')
                        const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                        const article = articles[parsedNumber - 1];
              
                        if (parsedNumber > articles.length) {
                          alanBtn().playText('Please try that again...');
                        } else if (article) {
                          window.open(article.url, '_blank');
                          alanBtn().playText('Opening...');
                        } else {
                          alanBtn().playText('Please try that again...');
                        }
                      }
                }
           })
    },[])

    return(
        <div>
        <h1 className='heading'>NEWS TIMES</h1>
            <div className={classes.logoContainer}>
            {/* <img src="https://media.istockphoto.com/id/1206796363/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection.jpg?s=612x612&w=0&k=20&c=xIX5Bz7h50B83cCZG_gXkyZSOu-mG93DtOcNK7RNEAo=" className={classes.alanLogo} alt="logo" /> */}
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle}  />
        </div>
    );
}

export default App;
// Fetch NASA breaking news RSS feed
var url = 'https://www.nasa.gov/rss/dyn/breaking_news.rss'
feednami.load(url)
    .then(feed => {
        var feedCount = 0;
        for(let entry of feed.entries){
            feedCount = feedCount + 1;
            // Control how many articles are displayed
            if (feedCount < 9) {
                // Create RSS article elements
                var rssArticle = document.createElement('a');
                rssArticle.className = 'rssArticle';
                var rssArticleContainer = document.createElement('div');
                rssArticleContainer.className = 'rssArtCont';
                var rssHeader = document.createElement('h3');
                rssHeader.className = 'rssHeader';
                var rssFeedText = document.createElement('p');
                rssFeedText.className = 'rssFeedText';
                var rssFeedSource = document.createElement('p');
                rssFeedSource.className = 'rssFeedSource';
                // Populate elements with information
                rssArticle.href = entry.link;
                rssHeader.innerHTML += entry.title;
                var rssFeedTextShortened = entry.summary.substr(0, 170);
                rssFeedText.innerHTML += rssFeedTextShortened + '...';
                rssFeedSource.innerHTML += entry.source.title;
                // Append elements to correct containers
                rssArticleContainer.appendChild(rssHeader);
                rssArticleContainer.appendChild(rssFeedText);
                rssArticleContainer.appendChild(rssFeedSource);
                rssArticle.appendChild(rssArticleContainer);
                document.getElementById('homepageRSS').appendChild(rssArticle);
            }
        }
    })
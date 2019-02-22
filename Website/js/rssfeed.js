// Fetch NASA breaking news RSS feed
google.load("feeds", "1");

function initialize() {
    var feed = new google.feeds.Feed("https://www.nasa.gov/rss/dyn/breaking_news.rss");
    feed.load(function(result) {
        if (!result.error) {
            for (var i = 0; i < 8; i++) {
                var entry = result.feed.entries[i];
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
                var rssFeedTextShortened = entry.contentSnippet.substr(0, 170);
                rssFeedText.innerHTML += rssFeedTextShortened + '...';
                rssFeedSource.innerHTML += 'NASA Breaking News';
                // Append elements to correct containers
                rssArticleContainer.appendChild(rssHeader);
                rssArticleContainer.appendChild(rssFeedText);
                rssArticleContainer.appendChild(rssFeedSource);
                rssArticle.appendChild(rssArticleContainer);
                document.getElementById('homepageRSS').appendChild(rssArticle);
            }
        }
    });
}
google.setOnLoadCallback(initialize);
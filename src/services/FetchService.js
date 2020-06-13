const FetchService = {
  fetchSite(url) {
    const opts = {
      mode: 'no-cors',
    };
    
    return fetch(url, opts)
      .then(res => res.text());
  },

  serializeVSTorrent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const posts = Array.from(doc.querySelectorAll('article.post'));

    return posts.map(post => {
      return {
        title: post.querySelector('h2.entry-title').textContent.trim(),
      };
    });
  },
};

export default FetchService;
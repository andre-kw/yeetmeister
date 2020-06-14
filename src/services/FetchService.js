const FetchService = {
  fetchSite(url) {
    const opts = {
      mode: 'no-cors',
      referrerPolicy: 'unsafe-url',
    };
    
    return fetch('https://cors-anywhere.herokuapp.com/' + url)
      .then(res => res.text());
  },

  serializeVSTorrent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const posts = Array.from(doc.querySelectorAll('article.post'));

    return posts.map(post => {
      return {
        title: post.querySelector('h2.entry-title').textContent.trim(),
        img: 'https://cors-anywhere.herokuapp.com/' + post.querySelector('.wp-post-image').getAttribute('src'),
        date: '',
      };
    });

    /*return [
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]', date: 'June 10, 2020'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]', date: 'June 10, 2020'},
      {title: 'Electronik Sound Lab – Drumart 1.1.0 (VSTi, AUi) [WIN.OSX x64]', date: 'June 10, 2020'},
      {title: 'Audio Assault – Sigma 1.0.2 (STANDALONE, VST, VST3, AAX, AU) [WIN.OSX.LINUX x64]', date: 'June 10, 2020'},
      {title: 'Electronik Sound Labs – ESL-Pads 1.1.0 (VSTi3, AUi) [WIN.OSX x64]', date: 'June 10, 2020'},
      {title: 'Frontline Producer – Funk Rock Guitars (REX2, WAV)', date: 'June 10, 2020'},
      {title: 'TBProAudio – bundle 2020.6 (STANDALONE, VST, VST3, RTAS, AAX) [WiN x86 x64]', date: 'June 10, 2020'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]', date: 'June 10, 2020'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]', date: 'June 10, 2020'},
      {title: 'Electronik Sound Lab – Drumart 1.1.0 (VSTi, AUi) [WIN.OSX x64]', date: 'June 10, 2020'},
      {title: 'Audio Assault – Sigma 1.0.2 (STANDALONE, VST, VST3, AAX, AU) [WIN.OSX.LINUX x64]', date: 'June 10, 2020'},
      {title: 'Electronik Sound Labs – ESL-Pads 1.1.0 (VSTi3, AUi) [WIN.OSX x64]', date: 'June 10, 2020'},
      {title: 'Frontline Producer – Funk Rock Guitars (REX2, WAV)', date: 'June 10, 2020'},
      {title: 'TBProAudio – bundle 2020.6 (STANDALONE, VST, VST3, RTAS, AAX) [WiN x86 x64]', date: 'June 10, 2020'},
    ];*/
  },
};

export default FetchService;
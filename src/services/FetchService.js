const FetchService = {
  fetchSite(url) {
    const opts = {
      mode: 'no-cors',
    };
    
    return fetch(url, opts)
      .then(res => {
        console.log(res);
        return res.text();
      });
  },

  serializeVSTorrent(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const posts = Array.from(doc.querySelectorAll('article.post'));

    // return posts.map(post => {
    //   return {
    //     title: post.querySelector('h2.entry-title').textContent.trim(),
    //   };
    // });

    return [
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
      {title: 'Audio Damage – AD046 Quanta 1.1.6 (VSTi, VSTi3, AAX, AUi) [WIN.OSX.LINUX x86 x64]'},
      {title: 'Impulse Record & Wave Arts – Convology XT Complete 1.18 (VST, VST3, AAX) [WiN x64]'},
    ];
  },
};

export default FetchService;
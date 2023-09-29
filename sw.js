const staticCacheName = 'keyCache_v1';

const fileUrl = [
  'index.html', 
  '/server/app.js'
  '/src/styledTheme.jsx', 
  '/src/main.jsx', 
  '/src/@media.js', 
  '/src/components/layuotApp.jsx', 
  '/src/components/o_site.jsx', 
  '/src/components/pageForm', 
  '/src/components/pageForm/blockLogin.jsc',
  '/src/components/pageForm/blockRegistration.jsc', 
  '/src/components/pageForm/blockRegistrationLogin.jsx', 
  '/src/components/pageForm/formaLogin.jsx',
  '/src/components/pageForm/formaRegistration.jsx', 
  '/src/components/pageForm/loyuotRegistrationLogin.jsx'
  ];
  
self.addEventListener('install',event =>{
  const cache = await cache.open(staticCacheName);
  await cache.addAll(fileUrl);
});

self.addEventListener('activate',event=>{});

self.addEventListener('fetch',event=>{
  console.log('fetch',event.request.url);
})
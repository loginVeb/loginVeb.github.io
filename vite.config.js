import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import mkcert from 'vite-plugin-mkcert';


export default defineConfig({

  server: { 
    //https: true,
    port: 3000
  },
   
  plugins: [
   // mkcert(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
    })
  ]
})
// https://vitejs.dev/config/

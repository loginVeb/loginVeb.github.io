import { defineConfig } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";


import manifest from "./locmanifest.json" assert { type: "json" };
//import manifest from "./locmanifest.json";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: { 
    //https: true,
    port: 3000
  },
  plugins: [
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
    })  ,
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
  ],
});

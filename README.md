# Minimal Example - Webpack and Babel

Including React in an existing HTML, CSS, VanillaJS project with Webpack and Babel.


### Commands

---
__Run dev-mode with:__
`npm run dev`

The command is equivalent to `webpack-dev-server --mode development --open`. See package.json .

changes will render automatically by saving. Wont save any dist files. 

---
__Run prod-mode with:__
`npm run start`

The command is equivalent to `webpack --mode production && node server.js`. See package.json .

changes wont render automatically by saving. Will create minimized files in /dist directory.

---

### Structure

- __/dist__ -> minimized files
  - bundle.js -> all .js, .css files are bundled here. Its the only file we need to include in index.html.
- __/src__ 
  - App _-Files_ -> React Component and its css
  - index _-Files_ -> VanillaJS-Things and React-Import and main-css
- babel.config.json -> Babel stuff
- __server.js__ -> simple express server
- __webpack.config.js__ -> Defines which file types will process by which loader. Webpack has a lot of loaders for different files and needs. You should try to use as few as possible.  

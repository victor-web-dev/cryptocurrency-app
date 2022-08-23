# Cryptocurrency app

* The main purpose of this project is to practice ReactJs and Electron, but at the same time to be useful to me or anyone who find this helpful.


## About  

This is a crypto currency finder that has everything that a person who deals with them needs. And by that I mean that this project will have News to check on global economical status, calculator, currency convertion and anything that i find useful to put in this project.


## How to Start :rocket:

**SSH**
```
  git clone git@github.com:victor-web-dev/cryptocurrency-app.git
```

__I'm using **npm** as example but it could be **yarn** as well__

**Open the project folder**
```
  npm install
```

**How to start ReactJs**
```
  npm start
```

**After starting Reactjs, start Electron**
```
  npm run electron-start
```

## Main Dependencies 📌

```
    "electron": "^16.0.5",
    "prop-types": "^15.8.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.0",
    "swiper": "^7.4.1",
```

### About Electron

There's no hard setup. Electron is configured to open a window with the resolution of _1280x720_.
It uses _localhost_ to load the page, because of that it needs to reactjs to be working.
All of that can be seen in the main.js file inside [/electron](/electron/)

Any further explanation about electron and how it works can be checked in their [website](https://www.electronjs.org/)


## App HomePage
 - That's how it looks like for now.
 ![gif](/readme_images/electron-app.gif)
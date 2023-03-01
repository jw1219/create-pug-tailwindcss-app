# Create Static Web Pages With Pug and Tailwindcss

This tool helps you build static websites quickly with pug and tailwindcss.

## Prerequisites

I use VSCode and the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
If you choose to use another editor, you'd need a dev server to live-check your pages.
You can also install `live-server` globally with this command:

```
npm install -g live-server
```

Then run:

```
live-server dist
```

to live-check your work.

## Get Started

Run the following command to set up everything:

```
npx create-pug-tailwindcss-app your-project-name
```

Then run:

```
cd your-project-name
npm start
```

to compile your pug files and tailwindcss.

Finally, start live server and click `dist` from the opened web page to see your work.

From now on, you can just write your pug and tailwindcss code, save and all changes will be reflected in the browser in real-time.
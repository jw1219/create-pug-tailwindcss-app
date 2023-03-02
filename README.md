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

Then run the following commands to compile your pug and css files.

```
cd your-project-name
npm start
```

Finally, start live server and click `dist` from the opened web page to see your work.

From now on, you can just write your pug and tailwindcss code, save and all changes will be reflected in the browser in real-time.

## Advanced Usage

### Pass Data to Pug Compiler

If you want to pass data to pug compiler, just add the `-O` or `--obj` option to the `npm run build:html` command like this:

```
# with javascript object
npm run build:html -- -O "{name: 'jesse'}"

# with JSON
npm run build:html -- -O '{"name": "jesse"}'

# with data file name
npm run build:html -- -O data.json
```

Please note that the `start` script combines both `npm run build:html` and `npm run build:css`, which means if you need to pass options to these commands, you have to run them separately.

### Prettify Output HTML

Pass the `--pretty` option to the `npm run build:html` command to prettify the output HTML file:

```
npm run build:html -- --pretty
```

### Hot Reload

Pass the `--watch` option to the `npm run build:html` and/or the `npm run build:css` command to make your changes reflected in the browser in real-time:

```
npm run build:html -- --watch
npm run build:css -- --watch
```
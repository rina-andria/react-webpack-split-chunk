## Chunk splitting with webpack 4

An example of **chunk splitting** config with **optimization.splitChunks** of **webpack 4**.
Chunk splitting is aimed to improve bundle performance loading (in the browser). It improves async loading, optimize the necessary code to be loaded and allow more dynamic configuration.
[For more details](https://webpack.js.org/configuration/optimization/#optimization-splitchunks)

Configuration inside **webpack.config.json**:

```
  optimization: {
    // instead of CommonsChunkPlugin
    splitChunks: {
      // min chunk size, if less then no split
      minSize: 50000,
      // generate separate vendor bundle including all packages under node_modules
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
```

After running:

```sh
npm install
npm build
```

Two bundles will be generated for **vendors** and **main**.
A minSize property can be set to
limit the chunk creation.

```
// min chunk size, if less then no split
minSize: 50000,
```

## Chunk splitting with webpack 4

An example of **chunk splitting** config with **optimization.splitChunks** of **webpack 4**.
Chunk splitting is aimed to improve bundle performance loading (in the browser). It improves async loading, optimize the necessary code to be loaded and allow more dynamic configuration.
[For more details](https://webpack.js.org/configuration/optimization/#optimization-splitchunks)

Configuration inside **webpack.config.json**:

In case you want to generate **commons** chunk containing shared packages by entry points:

```js
  optimization: {
    // instead of CommonsChunkPlugin
    splitChunks: {
      // min chunk size, if less then no split
      minSize: 50000,
      cacheGroups: {
        // commons chunk with shared packages by entry points
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
      }
    }
  },
```

In case you want to generate **vendors** chunk containing all node_modules packages:

```js
  optimization: {
    // instead of CommonsChunkPlugin
    splitChunks: {
      // min chunk size, if less then no split
      minSize: 50000,
      cacheGroups: {
        // vendors chunk contains all node_modules packages
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      }
    }
  },
```

After running:

```sh
npm install
npm build
```

For the test of above cases, you can play with **webpack.config.js**

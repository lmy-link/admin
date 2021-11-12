module.exports = {
  css: {
    extract: true,
    sourceMap: false, // 是否为 CSS 开启 source map
    loaderOptions: {
      postcss: {
        plugins: [
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 100, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.triangle', '.ignore_doc', '.ignore_doc_footer', '.ignore_indexBar', '.ignore_doc_num'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 0 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
};
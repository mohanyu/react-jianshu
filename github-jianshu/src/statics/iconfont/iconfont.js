import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1535295715504'); /* IE9*/
    src: url('./iconfont.eot?t=1535295715504#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1535295715504') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1535295715504#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }}

`;








import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import logo from '../assets/images/no_data@2x.png'
import style from './index.scss'

function render() {
  return ReactDOM.render(
    <App>
      <section className={style.container}>
        <p>Hello, react + red11ux</p>
        <img src={logo} className={style.logo} alt="logo" />
      </section>
    </App>
    ,
    document.getElementById('tcl-container')
  );
}

render();
if (module.hot) {
  module.hot.accept(['~/components/App'], render);
  module.hot.accept(() => window.location.reload(true));
}

/**
 * 出现“找不到模块”问题，

这个问题是因为图片文件中没有类似export这样的关键词用于导出一个模块，所以导致找不到模块，可以通过ts的类型定义文件中的模块声明（declare module）来解决。

解决方案：

在src目录下新建一个types文件夹，用于存在放图片等模块声明， 以及后续需要用到的全局校验接口，在typings文件夹新建import.d.ts文件
yarn add @types/webpack-env -D
 */
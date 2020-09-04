import React from 'react'
import style from './index.scss'
import ReactDOM from 'react-dom'
import App from '~/components/App'
import Result from '~/mock/Result'
import Home from '~/containers/home'
import logo from '../assets/images/no_data@2x.png'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

function render() {
  return ReactDOM.render(
    <App>
      <section className={style.container}>
        <p>Hello, react + red11ux</p>
        <img src={logo} className={style.logo} alt="logo" />
      </section>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route path="/result" component={Result}></Route>
        </Switch>
      </Router>
    </App>
    ,
    document.getElementById('sakura-container')
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
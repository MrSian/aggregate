import React, { Component } from 'react'

// 创建类型接口
export interface IHomeProps {

}

export interface IHomestate {

}

// 使用类型接口代替propTypes进行类型效验
class Result extends Component<IHomeProps, IHomestate> {
  public render() {
    return (
      <section>
        Result
      </section>
    )
  }
}

export default Result
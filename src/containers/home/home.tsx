import React, { Component } from 'react'
import HttpApi from '../../api/request'
import server from '../../server/public'

// 创建类型接口
export interface IHomeProps {

}

export interface IHomestate {
  testData: any[];
}

// 使用类型接口代替propTypes进行类型效验
class Home extends Component<IHomeProps, IHomestate> {
  constructor(props: Readonly<IHomeProps>) {
    super(props)
    this.state = {
      testData: []
    }
  }
  public componentDidMount() {
    server.publicGet(HttpApi.priceList, { page: 1, size: 50 }).then((res: any) => {
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }
  public render() {
    return (
      <section>
        Home
      </section>
    )
  }
}

export default Home
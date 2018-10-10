import React, {Component} from "react";
import "./index.less";
import {Breadcrumb} from "antd"

export default class Header extends Component{
    state={
        date:"2018-10-10 18:00:00",
        weather:"低温3.0℃-高温18.0℃ 东南风3-7级"
    }
    render(){
      
        return(
            <div className="wrap">
                <div className="first clearfix">
                    <div className="text flr">
                        <span>欢迎，</span><span className="user">李丹青</span>
                        {' '}
                        <strong className="quit">退出</strong>
                    </div>
                   
                </div>  
                <div className="second clearfix">
                    <div className="left fll">
                       <Breadcrumb className="crumb">
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>第二页</Breadcrumb.Item>
                       </Breadcrumb>
                    </div>
                    <div className=" right flr">
                        <span className="text">{this.state.date}</span>
                        {' '}
                        <strong>{this.state.weather}</strong>
                    </div>
                </div>
            </div>
        )
    }
}
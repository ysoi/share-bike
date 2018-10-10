import React, {Component} from "react";
import "./index.less";
import {Menu} from "antd";

export default class Nav extends Component{
    render(){
        return(
            <div className="wrapNav">
                <Menu theme="dark">
                    <Menu.Item key="01">首页</Menu.Item>
                    <Menu.Item key="02"> 第二页</Menu.Item>
                </Menu>
            </div>
        )
    }
}
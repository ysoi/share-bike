import React, {Component} from "react";
import "./index.less";
import {Menu} from "antd";
import {Link} from "react-router-dom";


export default class Nav extends Component{
    render(){
        return(
            <div className="wrapNav">
                <Menu theme="dark">
                    <Menu.Item key="01"><Link to="/admin/home">首页</Link></Menu.Item>
                    <Menu.Item key="03"><Link to="/admin/order">订单管理</Link> </Menu.Item>
                </Menu>
            </div>
        )
    }
}
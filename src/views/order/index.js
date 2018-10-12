import React, { Component } from 'react';
import { Card, Select, Form, DatePicker,Button,Table } from "antd"
const Option = Select.Option;
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
class Order extends Component {
    // 城市数据
    cityData = [
        {
            label: "北京",
            id: '0',

        },
        {
            label: '上海',
            id: '01'
        },
        {
            label: '广州',
            id: '02'
        },
        {
            label: '郑州',
            id: '03'
        }

    ];
    // 状态数据
    orderStatu = [
        {
            label: "全部",
            id: '0',

        },
        {
            label: '结束',
            id: '01'
        },
        {
            label: '进行中',
            id: '02'
        },

    ];
    //表格表头
    tableColumns=[
        {
            title:'订单编号',
            dataIndex:'order_sn',
            key: 'order_sn'
        },
        {
            title: '车辆编号',
            dataIndex: 'bike_sn',
            key: 'bike_sn'
        },
        {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name'
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            key: 'mobile'
        },
        {
            title: '里程',
            dataIndex: 'distance',
            render(distance){
                return distance/1000 + 'Km';
            },
            key: 'distance'
        },
        {
            title: '行驶时长',
            dataIndex: 'total_time',
            key: 'total_time'
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: '开始时间',
            dataIndex: 'start_time',
            key: 'start_time'
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 'end_time'
        },
        {
            title: '订单金额',
            dataIndex: 'total_fee',
            key: 'total_fee'
        },
        {
            title: '实付金额',
            dataIndex: 'user_pay',
            key: 'user_pay'
        }
    ];
    
    render() {
        return (
            <div className='order'>
                <Card title="订单检索">
                    <Form layout="inline" >
                        <FormItem label="城市">
                            <Select placeholder="选择城市" style={{ width: "200px" }}>
                                {this.cityData.map(item => <Option value={item.id} key={item.id}>{item.label}</Option>)}
                            </Select>
                        </FormItem>
                        <FormItem label="订单时间">
                            <RangePicker placeholder={["开始", "结束"]} />
                        </FormItem>
                        <FormItem label="订单状态">
                            <Select placeholder="选择订单状态" style={{ width: "200px" }}>
                                {this.orderStatu.map(item => <Option value={item.id} key={item.id}>{item.label}</Option>)}
                            </Select>
                            
                        </FormItem>
                        <div style={{marginTop:"15px"}}>
                            <Button type="primary"   style={{marginRight:"20px"}}>查询</Button>
                            <Button type="danger">重置</Button>
                        </div>
                    </Form>
                </Card>
                <Card title="订单操作" >
                    <Button type="primary" size="large" style={{marginRight:"20px"}}>订单详情</Button>
                    <Button type="primary" size="large">结束订单</Button>
                </Card>
                <Card title="订单管理">
                    <Table columns={this.tableColumns}></Table>
                </Card>

            </div>
        )
    }
}
export default Order;
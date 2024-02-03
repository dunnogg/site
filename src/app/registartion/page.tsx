"use client"
import React from 'react';
import {LockOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './registration.module.css';

const App: React.FC = () => {
    const onFinish = (values: any) => {
        values.superuser = false;
        const result = getResult(values);
        console.log(values)
    };
    async function getResult(value: object) {
        try {
            return await fetch(
                '/api/registration', {
                    method: "POST",
                    body: JSON.stringify(value),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        } catch (e) {
            return[];
        }
    }
    return (
        <Form
            name="normal_registration"
            className={styles.regform}
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your mail!' }]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    );
};

export default App;
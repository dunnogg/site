"use client"
import React, {useState} from 'react';
import {Form, Input, Button, Space, Upload, UploadProps, UploadFile} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
const App: React.FC = () => {
    const [file, setFile] = useState<File>()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!file) return

        try {
            const data = new FormData()
            data.append('file', file);
            const res = await fetch('/api/drinkimage', {
                method: 'POST',
                body: data
            })
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            console.error(e);
            return alert('Ошибка загрузки изображения на сервер');
        }
    }
    const validateMessages = {
        required: "Заполните поле ${label}",
    };
    const props = {
        rules: [{ required: true }]
    };
    async function getResult(value: object) {
        try {
            return await fetch(
                'http://localhost:5000/drinks', {
                    method: "POST",
                    body: JSON.stringify(value),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        } catch (e) {
            return alert('Ошибка отправки текстовых данных на сервер');
        }
    }
    const onFinish = async (value: any) => {
        let result = getResult(value);
        let ImageRes = onSubmit(value.image);
    }
    return (
       <Form name="form_item_path" layout="vertical" onFinish={onFinish} validateMessages={validateMessages}>
            <FormItem name="title" label="Название" {...props}>
                <Input/>
            </FormItem>
            <FormItem name="description" label="Описание" {...props}>
                <Input.TextArea rows={4}/>
            </FormItem>
            <FormItem name="advantages" label="Преимущества" {...props}>
                <Input/>
            </FormItem>
            <FormItem name="disadvantages" label="Недостатки" {...props}>
                <Input/>
            </FormItem>
            <Form.List name="characteristics">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'title']}
                                    rules={[{ required: true, message: 'Missing characteristic name' }]}
                                >
                                    <Input placeholder="Characteristic name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'description']}
                                    rules={[{ required: true, message: 'Missing description' }]}
                                >
                                    <Input placeholder="Characteristic description" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Добавить характеристику
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
           <Form.Item name='image' label={"Изображение"} {...props}>
               <input
                   type="file"
                   name="file"
                   onChange={(e) => setFile(e.target.files?.[0])}
               />
           </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};
export default App;
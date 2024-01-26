"use client"
import React, {useState} from 'react';
import {Form, Input, Button, Space, Upload, UploadProps, UploadFile} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {MinusCircleOutlined, PlusOutlined, UploadOutlined} from "@ant-design/icons";
const App: React.FC = () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleChange: UploadProps['onChange'] = (info) => {
        let newFileList = [...info.fileList];
        newFileList = newFileList.slice(-1);

        newFileList = newFileList.map((file) => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });

        setFileList(newFileList);
    };
    const props = {
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        onChange: handleChange,
        multiple: true,
    };
    async function getResult(value: object) {
        try {
            return await fetch(
                'http://localhost:5000/drinks', {
                    method: "post",
                    body: JSON.stringify(value),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
        } catch (e) {
            return[];
        }
    }
    const onFinish = async (value: object) => {
        let result = getResult(value);
        console.log(fileList);
        console.log(JSON.stringify(value));
    }
    return (
       <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <FormItem name="title" label="Название">
                <Input/>
            </FormItem>
            <FormItem name="description" label="Описание">
                <Input.TextArea rows={4}/>
            </FormItem>
            <FormItem name="advantages" label="Преимущества">
                <Input/>
            </FormItem>
            <FormItem name="disadvantages" label="Недостатки">
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
           <Form.Item name="image" label={"Изображение"}>
               <Upload {...props} fileList={fileList}>
                   <Button icon={<UploadOutlined/>}></Button>
               </Upload>
           </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};
export default App;
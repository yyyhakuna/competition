import React from 'react'
import { Select, Upload, Form, Input, Button, message } from 'antd';
const createTeam = () => {
  const onFinish = () => {
    console.log('aaa');
  }
  return (
    <div>
      <Form
        name="basic"
        style={{
          maxWidth: 400,
          display: 'flex',
          flexDirection: 'column',
          margin: ' 60px auto',
          textAlign: 'left'
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Logo"
          name="logo"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 6,
          }}
        >
          <Button htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default createTeam
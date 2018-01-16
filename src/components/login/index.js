import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import axios from 'axios';
import './../../static/css/login/login.css'
import { fakeAuth } from '../common/fakeAuth'

const FormItem = Form.Item;

// const axiosPost = axios.create({
  // baseURL: 'http://localhost:3000',
  // headers: {'X-Requested-With': 'XMLHttpRequest'}
// });

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

class LoginForm extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form:', values);
            axios.defaults.baseURL = 'http://localhost:3000';
            axios.post('/login/loginer', values).then(res => {
              console.log(res);
              if (res.data.code === '0') {
                // window.location.href = '/use';
                console.log('成功');
                fakeAuth.authenticate();
                this.props.history.push('/');
                console.log(fakeAuth.isAuthenticated, '1111');
              }else {
                message.error('登录失败，请确认账号密码正确');
              }
            })
          }
        });
      }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}

const Login = Form.create()(LoginForm);

export default Login;
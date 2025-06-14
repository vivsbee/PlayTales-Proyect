import React from 'react';
import { useAuth } from '../context/UserContext.jsx';
import { useUsers } from '../hooks/useUsers.jsx';
import { useAlert } from '../hooks/useAlert.jsx';
import { Button, Form, Input, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Login() {

  const [form] = Form.useForm();
  const { users } = useUsers();
  const { show } = useAlert();
  const context = useAuth();
  const navigate = useNavigate();
  
  const onFinish = values => {
    console.log('Success:', values);
    const { password, username } = values;
    const success = context.login({ userNameExt: username, passwordExt: password });

    if (success) {
      show({ type: "success", text: "Inicio de sesión exitoso" });
      // navigate("/dashboard")
    } else {
      show({ type: "error", text: "Credenciales inválidas" });
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    show({ type: "error", text: "Oh, hubo un error al enviar, por favor intente de nuevo" });
  };

  return (
    <>
      <Form
        form={form}
        variant="Underlined"
        // name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="bg-mistlayer p-12 w-[60%] mx-auto mt-6 mb-6 rounded-xl flex flex-col items-center text-voidlight"
      >
        <h1 className="text-voidlight text-center font-semibold font-tipographyTexto text-3xl m-2">Formulario de inicio de sesión</h1>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="w-[400px]" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="w-[400px]"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {users.length === 0 && (
          <p className="text-sm text-voidlight mb-2">Cargando usuarios...</p>
        )}


        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={users.length === 0}>
            Iniciar sesión
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
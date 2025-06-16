import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../hooks/useAlert.jsx';
import { Button, Form, Input, Checkbox } from 'antd';

export function Register() {

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { show } = useAlert();

  const onFinish = (values) => {
    console.log('Success:', values);
    show({ type: "success", text: "Registration successful!" });
    navigate('/login');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    show({ type: "error", text: "Registration failed. Please check the form." });
  };

  return (
    <>
      <section className="flex h-screen w-full">
        <div className=" w-1/2 relative overflow-hidden h-full">
          <div className="absolute inset-0">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect x="0" y="0" width="900" height="600" fill="#05061B"></rect>
              <path d="M304 0L282.3 16.7C260.7 33.3 217.3 66.7 216.2 100C215 133.3 256 166.7 265 200C274 233.3 251 266.7 250.2 300C249.3 333.3 270.7 366.7 268 400C265.3 433.3 238.7 466.7 245.5 500C252.3 533.3 292.7 566.7 312.8 583.3L333 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#7f337d"></path>
              <path d="M179 0L181 16.7C183 33.3 187 66.7 206.5 100C226 133.3 261 166.7 277.2 200C293.3 233.3 290.7 266.7 260.2 300C229.7 333.3 171.3 366.7 144.7 400C118 433.3 123 466.7 140.2 500C157.3 533.3 186.7 566.7 201.3 583.3L216 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#843388"></path>
              <path d="M231 0L217.8 16.7C204.7 33.3 178.3 66.7 165 100C151.7 133.3 151.3 166.7 158.8 200C166.3 233.3 181.7 266.7 199.8 300C218 333.3 239 366.7 232.2 400C225.3 433.3 190.7 466.7 188.8 500C187 533.3 218 566.7 233.5 583.3L249 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#883494"></path>
              <path d="M151 0L143.5 16.7C136 33.3 121 66.7 108.8 100C96.7 133.3 87.3 166.7 85.8 200C84.3 233.3 90.7 266.7 112 300C133.3 333.3 169.7 366.7 173 400C176.3 433.3 146.7 466.7 144.8 500C143 533.3 169 566.7 182 583.3L195 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#8c35a1"></path>
              <path d="M73 0L84.8 16.7C96.7 33.3 120.3 66.7 122.7 100C125 133.3 106 166.7 99.5 200C93 233.3 99 266.7 97.8 300C96.7 333.3 88.3 366.7 85.2 400C82 433.3 84 466.7 101.7 500C119.3 533.3 152.7 566.7 169.3 583.3L186 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#8e37ae"></path>
              <path d="M113 0L111.7 16.7C110.3 33.3 107.7 66.7 110.8 100C114 133.3 123 166.7 114.8 200C106.7 233.3 81.3 266.7 76.5 300C71.7 333.3 87.3 366.7 97 400C106.7 433.3 110.3 466.7 107 500C103.7 533.3 93.3 566.7 88.2 583.3L83 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#8f3abc"></path>
              <path d="M93 0L85.2 16.7C77.3 33.3 61.7 66.7 58 100C54.3 133.3 62.7 166.7 69.8 200C77 233.3 83 266.7 81.7 300C80.3 333.3 71.7 366.7 71.3 400C71 433.3 79 466.7 75.7 500C72.3 533.3 57.7 566.7 50.3 583.3L43 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#8f3dca"></path>
              <path d="M34 0L38.2 16.7C42.3 33.3 50.7 66.7 56 100C61.3 133.3 63.7 166.7 64.8 200C66 233.3 66 266.7 63.3 300C60.7 333.3 55.3 366.7 52.2 400C49 433.3 48 466.7 47.2 500C46.3 533.3 45.7 566.7 45.3 583.3L45 600L0 600L0 583.3C0 566.7 0 533.3 0 500C0 466.7 0 433.3 0 400C0 366.7 0 333.3 0 300C0 266.7 0 233.3 0 200C0 166.7 0 133.3 0 100C0 66.7 0 33.3 0 16.7L0 0Z" fill="#8d41d9"></path>
            </svg>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center bg-deepwave p-8 z-10">
          <div className='mr-52 w-full h-auto bg-mistlayer rounded-md shadow-neonSmall hover:shadow-neonBig transition duration-300 ease-in-out'>
            <Form
              form={form}
              variant="Underlined"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="p-12  rounded-xl flex flex-col items-center text-voidlight"
            >
              <h1 className="text-voidlight text-center font-semibold font-tipographyTexto text-3xl m-2">Sign up</h1>

              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <input
                  placeholder="   Username"
                  className='w-[400px] bg-transparent border-b-[2px] border-voidlight text-voidlight placeholder-voidlight focus:outline-none focus:border-ice rounded-none transition duration-300 opacity-70 focus:opacity-100'
                  type="text"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Este no es un correo válido traduciiiiiir' }
                ]}
              >
                <Input
                  placeholder="Email"
                  className="w-[400px] bg-transparent border-b-[2px] border-voidlight text-voidlight placeholder-voidlight focus:outline-none focus:border-ice rounded-none transition duration-300 opacity-70 focus:opacity-100"
                />
              </Form.Item>

              <Form.Item
                label={null}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  placeholder="Password"
                  visibilityToggle={false}
                  className="w-[400px] bg-transparent text-voidlight focus:outline-none border-b border-voidlight focus:opacity-100 opacity-70 transition-all duration-300 rounded-none placeholder-voidlight"
                />
              </Form.Item>


              <Form.Item
                name="confirm"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match!'));
                    }
                  })
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  visibilityToggle={false}
                  className="w-[400px] bg-transparent text-voidlight focus:outline-none border-b border-voidlight focus:opacity-100 opacity-70 transition-all duration-300 rounded-none placeholder-voidlight"
                />
              </Form.Item>


              <Form.Item className="w-full flex justify-center mt-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-bottondark !text-deepwave font-tipographyTexto px-6 py-2 rounded-lg font-semibold transition duration-300 hover:!bg-bottonlight/80 disabled:opacity-50"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}
import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '../context/UserContext.jsx';
import { useUsers } from '../hooks/useUsers.jsx';
import { useAlert } from '../hooks/useAlert.jsx';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Login() {

  const [form] = Form.useForm();
  const { users } = useUsers();
  const { show } = useAlert();
  const context = useAuth();
  const navigate = useNavigate();


  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);


  const onFinish = values => {
    console.log('Success:', values);
    const { email, password } = values;
    const success = context.login({ emailExt: email, passwordExt: password });

    if (success) {
      show({ title: "Success", type: "success", text: "Welcome back, gamer! 🎮", redirect: "/" });
    } else {
      show({ type: "error", title: "Error", text: "Oops! That email or password isn't right." });
    }
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    show({ type: "error", title: "Error", text: "Yikes! Something went wrong. Try again, please." });
  };

  return (
    <>
      <section className="flex h-screen w-full">
        <div className="w-1/2 flex items-center justify-center bg-deepwave p-8 z-10">
          <div className='ml-52 w-full h-auto bg-mistlayer rounded-md shadow-neonSmall hover:shadow-neonBig transition duration-300 ease-in-out'>
            <Form
              form={form}
              variant="Underlined"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="p-12  rounded-xl flex flex-col items-center text-voidlight"
            >
              <h1 className="text-voidlight text-center font-semibold font-tipographyTexto text-3xl m-2">Sign in</h1>

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

              <Form.Item className="w-full flex justify-center mt-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!bg-bottondark !text-deepwave font-tipographyTexto px-6 py-2 rounded-lg font-semibold transition duration-300 hover:!bg-bottonlight/80 disabled:opacity-50"
                  disabled={users.length === 0}
                >
                  Log in
                </Button>
              </Form.Item>

            </Form>
          </div>
        </div>

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
              <path d="M598 600L619.7 583.3C641.3 566.7 684.7 533.3 685.8 500C687 466.7 646 433.3 637 400C628 366.7 651 333.3 651.8 300C652.7 266.7 631.3 233.3 634 200C636.7 166.7 663.3 133.3 656.5 100C649.7 66.7 609.3 33.3 589.2 16.7L569 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#7f337d"></path>
              <path d="M723 600L721 583.3C719 566.7 715 533.3 695.5 500C676 466.7 641 433.3 624.8 400C608.7 366.7 611.3 333.3 641.8 300C672.3 266.7 730.7 233.3 757.3 200C784 166.7 779 133.3 761.8 100C744.7 66.7 715.3 33.3 700.7 16.7L686 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#843388"></path>
              <path d="M671 600L684.2 583.3C697.3 566.7 723.7 533.3 737 500C750.3 466.7 750.7 433.3 743.2 400C735.7 366.7 720.3 333.3 702.2 300C684 266.7 663 233.3 669.8 200C676.7 166.7 711.3 133.3 713.2 100C715 66.7 684 33.3 668.5 16.7L653 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#883494"></path>
              <path d="M751 600L758.5 583.3C766 566.7 781 533.3 793.2 500C805.3 466.7 814.7 433.3 816.2 400C817.7 366.7 811.3 333.3 790 300C768.7 266.7 732.3 233.3 729 200C725.7 166.7 755.3 133.3 757.2 100C759 66.7 733 33.3 720 16.7L707 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#8c35a1"></path>
              <path d="M829 600L817.2 583.3C805.3 566.7 781.7 533.3 779.3 500C777 466.7 796 433.3 802.5 400C809 366.7 803 333.3 804.2 300C805.3 266.7 813.7 233.3 816.8 200C820 166.7 818 133.3 800.3 100C782.7 66.7 749.3 33.3 732.7 16.7L716 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#8e37ae"></path>
              <path d="M789 600L790.3 583.3C791.7 566.7 794.3 533.3 791.2 500C788 466.7 779 433.3 787.2 400C795.3 366.7 820.7 333.3 825.5 300C830.3 266.7 814.7 233.3 805 200C795.3 166.7 791.7 133.3 795 100C798.3 66.7 808.7 33.3 813.8 16.7L819 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#8f3abc"></path>
              <path d="M809 600L816.8 583.3C824.7 566.7 840.3 533.3 844 500C847.7 466.7 839.3 433.3 832.2 400C825 366.7 819 333.3 820.3 300C821.7 266.7 830.3 233.3 830.7 200C831 166.7 823 133.3 826.3 100C829.7 66.7 844.3 33.3 851.7 16.7L859 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#8f3dca"></path>
              <path d="M868 600L863.8 583.3C859.7 566.7 851.3 533.3 846 500C840.7 466.7 838.3 433.3 837.2 400C836 366.7 836 333.3 838.7 300C841.3 266.7 846.7 233.3 849.8 200C853 166.7 854 133.3 854.8 100C855.7 66.7 856.3 33.3 856.7 16.7L857 0L900 0L900 16.7C900 33.3 900 66.7 900 100C900 133.3 900 166.7 900 200C900 233.3 900 266.7 900 300C900 333.3 900 366.7 900 400C900 433.3 900 466.7 900 500C900 533.3 900 566.7 900 583.3L900 600Z" fill="#8d41d9"></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  )
}
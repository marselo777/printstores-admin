import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const LoginForm = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout='horizontal'
            style={{width:'450px'}}
            {...layout}
        >
            <Form.Item
                label="Логин"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item  name="remember" valuePropName="checked" {...tailLayout}>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout} >
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
}
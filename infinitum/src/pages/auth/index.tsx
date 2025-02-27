import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import {
  Container,
  AuthCard,
  Logo,
  Tabs,
  Tab,
  Form,
  Input,
  Button,
  Divider,
  SocialButton,
  SocialButtonsContainer,
  ErrorMessage
} from './styles';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de login
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Entrar</Button>
    </Form>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de registro
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Criar conta</Button>
    </Form>
  );
};

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login');

  const handleSocialLogin = (provider: string) => {
    // Implementar lógica de login social
    console.log(`Login com ${provider}`);
  };

  return (
    <Container>
      <AuthCard>
        <Logo>Infinitum</Logo>
        <Tabs>
          <Tab
            active={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
          >
            Login
          </Tab>
          <Tab
            active={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
          >
            Criar conta
          </Tab>
        </Tabs>

        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}

        <Divider>
          <span>ou continue com</span>
        </Divider>

        <SocialButtonsContainer>
          <SocialButton onClick={() => handleSocialLogin('Google')}>
            <FcGoogle size={20} />
            Google
          </SocialButton>
          <SocialButton
            onClick={() => handleSocialLogin('Facebook')}
            style={{ background: '#1877f2', color: 'white', border: 'none' }}
          >
            <FaFacebook size={20} />
            Facebook
          </SocialButton>
        </SocialButtonsContainer>
      </AuthCard>
    </Container>
  );
}
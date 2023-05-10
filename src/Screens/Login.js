import React, {useEffect, useState} from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import axios from 'axios';
import {
  useRecoilState
} from 'recoil';
import { useNavigate } from 'react-router-dom';

import { isAdminAtom, tokenAtom, isLoginAtom, idAtom } from './Login.state'

function Login() {
  const [isAdmin, setIsAdmin] = useRecoilState(isAdminAtom);
  const [isId, setId] = useRecoilState(idAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const nav = useNavigate();
  const [token, setToken] = useRecoilState(tokenAtom);
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    axios.post('http://localhost:8000/api/users/login', data)
    .then((response) => {console.log(response.data);
      setToken(response.data.token);
      setIsAdmin(response.data.isAdmin); 
      setIsLogin(true);
      setId(response.data._id);
    })
    .then((result) => {
      console.log('Success:', result);
      nav('/dashboard');
    })
    .catch((error) => {
      setError(true);
    });
  }
  useEffect(() => {if (isLogin) nav('/dashboard')});
  return (
    <div>
      {!isLogin && <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img src="/images/logo-no-background.png" alt="logo" className='w-full h-12 object-contain '/>
                <Input label="Email" placeholder="Email" type="email" bg={true} onChange={e=>setEmail(e.target.value)}/>
                <Input label="Password" placeholder="Password" type="Password" bg={true} onChange={e=>setPassword(e.target.value)}/>
                <Link onClick={handleSubmit} className='bg-subMain transitions mb-5 hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    <FiLogIn/> Sign In
                </Link>
                <p className='text-center text-border'>
                    Don't have an account?{" "}
                    <Link to="/register" className='text-dryGray font-semibold ml-2'> Sign Up</Link>
                </p>
               {error && <p>Re-Enter Login Credentials</p>}
            </div>
        </div>
      </Layout>}
    </div>
  )
}

export default Login

import {React, useState} from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import axios from 'axios';
import {
  useRecoilState
} from 'recoil';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [error, setError] = useState(false);
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { fullname, email, password };
    axios.post('/api/users/', data)
    .then((response) => {
      console.log(response.data);
    })
    .then((result) => {
      console.log('Success:', result);
      nav('/login');
    })
    .catch((error) => {
      setError(true);
    });
  }
  return (
    <div>
      <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img src="/images/logo-no-background.png" alt="logo" className='w-full h-12 object-contain '/>
                <Input label="FullName" placeholder="Enter your name" type="text" onChange={e=>setFullname(e.target.value)} bg={true}/>
                <Input label="Email" placeholder="Enter your email" type="email" onChange={e=>setEmail(e.target.value)} bg={true}/>
                <Input label="Password" placeholder="Enter your password" type="password" onChange={e=>setPassword(e.target.value)} bg={true}/>
                <Link onClick={handleSubmit} className='bg-subMain transitions mb-5 hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    <FiLogIn/> Sign Up
                </Link>
                <p className='text-center text-border'>
                    Already have an account?{" "}
                    <Link to="/login" className='text-dryGray font-semibold ml-2'> Sign In</Link>
                </p>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Register

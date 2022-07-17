import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useRegister from '../../../hooks/useRegister';

export const Signup = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visibility, setVisibility] = useState(false);
    const registerAction = useRegister();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registerAction(email, password, pseudo);
    };

    return (
        <div className='h-screen bg-primary'>
            <img src='./pokeball-icon.png' className='object-cover absolute  -top-20 -left-48' alt='pokeball' />
            <div className='flex items-center justify-center h-full'>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-4 bg-white rounded-lg w-1/5 p-4 justify-center flex flex-col'
                >
                    <input
                        onChange={e => setPseudo(e.target.value)}
                        className='px-1 py-4 border-2 border-gray-200 rounded-lg'
                        type='text'
                        placeholder='pseudo'
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        className='px-1 py-4 border-2 border-gray-200 rounded-lg'
                        type='email'
                        placeholder='email'
                    />
                    <div className='relative w-full'>
                        <input
                            minLength={8}
                            onChange={e => setPassword(e.target.value)}
                            className='px-1 pr-8 py-4 border-2 border-gray-200 rounded-lg w-full'
                            type={visibility ? 'text' : 'password'}
                            placeholder='password'
                        />
                        <AiOutlineEye
                            onMouseDown={() => setVisibility(true)}
                            onMouseUp={() => setVisibility(false)}
                            className='text-gray-200 text-2xl absolute top-1/2 cursor-pointer -translate-y-1/2 right-2 z-50'
                        />
                    </div>
                    <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
                        Register
                    </button>
                    <Link to='/'>
                        <h4 className=' text-center'>
                            Already have an account ? <p className='underline text-blue-500'>Sign in</p>
                        </h4>
                    </Link>
                </form>
            </div>
        </div>
    );
};

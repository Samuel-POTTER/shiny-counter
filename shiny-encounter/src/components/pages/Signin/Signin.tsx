import { Link } from 'react-router-dom';

export const Signin = () => {
    return (
        <div className='h-screen bg-primary'>
            <img src='./pokeball-icon.png' className='object-cover absolute  -top-20 -left-48' alt='pokeball' />
            <div className='flex items-center justify-center h-full'>
                <form className='space-y-4 bg-white rounded-lg w-1/5 p-4 justify-center flex flex-col'>
                    <input className='px-1 py-4 border-2 border-gray-200 rounded-lg' type='email' placeholder='email' />
                    <input
                        className='px-1 py-4 border-2 border-gray-200 rounded-lg'
                        type='password'
                        placeholder='password'
                    />
                    <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
                        Sign in
                    </button>
                    <Link to='/register'>
                        <h4 className='underline text-blue-500 text-center'>Register</h4>
                    </Link>
                </form>
            </div>
        </div>
    );
};

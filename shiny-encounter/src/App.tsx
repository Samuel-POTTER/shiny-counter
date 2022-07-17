import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/Home/Home';
import { Signin } from './components/pages/Signin/Signin';
import { Signup } from './components/pages/Signup/Signup';
import AuthContextProvider from './context/AuthContext';

function App() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Signin />} />
                        <Route path='/register' element={<Signup />} />
                        <Route path='/home' element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </AuthContextProvider>
        </QueryClientProvider>
    );
}

export default App;

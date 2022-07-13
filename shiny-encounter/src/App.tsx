import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Signin } from './components/pages/Signin/Signin';
import { Signup } from './components/pages/Signup/Signup';

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
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Signin />} />
                    <Route path='/register' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;

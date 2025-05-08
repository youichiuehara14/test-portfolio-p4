import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/app');
    } catch (err) {
      console.error('Register error:, ', err);
      setError('User doesnt exist..');
    }
  };

  return (
    <div className="mx-auto sm:w-md p-4 border-1 bg-[#171717] border-[#5a5a5a] mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 rounded border-1  bg-[#171717] border-[#5a5a5a]"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded border-1 bg-[#171717] border-[#5a5a5a]"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-orange-500 p-2 rounded hover:bg-orange-600 w-full">
          Login
        </button>
      </form>
      <div className="flex flex-wrap gap-1 mt-4">
        <p>Don't have an account?</p>
        <Link to="/register" className="text-orange-300 underline ">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import Layout from '../components/Layout'; // Import the Layout component

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/backend/api.php?action=login', { // Changed URL to dynamic API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login API response:', data); // Added log

      if (data.message === "Login successful.") {
        localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
        navigate('/admin');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login.');
      console.error('Login error:', err);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]"> {/* Adjusted height to account for header/footer */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"> {/* Adjusted shadow */}
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2> {/* Changed title to "Login" */}
          <p className="text-center text-gray-600 mb-6">Enter your credentials to access the admin dashboard</p> {/* Added subtitle */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <div className="relative">
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="info@mksribuilders.com" // Added placeholder
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Added pr-10 for icon
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M18.685 19.02A.75.75 0 0 1 18 19.5H6a.75.75 0 0 1-.685-.48C4.203 16.161 2.5 13.152 2.5 10.5c0-4.192 3.504-7.5 7.875-7.5 4.286 0 7.672 3.23 7.875 7.382A15.926 15.926 0 0 1 21.5 10.5c0 2.652-1.703 5.661-3.315 8.52Z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10" // Added pr-10 for icon
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-[#2A3B5B] text-white py-2 px-4 rounded-lg hover:bg-[#1e2c47] focus:outline-none focus:ring-2 focus:ring-[#2A3B5B] focus:ring-opacity-50" // Changed button color
            >
              Login
            </Button>
            <p className="text-center text-gray-500 text-sm mt-4">Only authorized personnel can access this area.</p> {/* Added disclaimer */}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

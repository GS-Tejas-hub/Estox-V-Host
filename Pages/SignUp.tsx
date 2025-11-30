import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '@/entities/User';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { UserPlus, AlertCircle, Mail, Lock, User as UserIcon, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [role, setRole] = useState<'admin' | 'investor'>('investor');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            setLoading(false);
            return;
        }

        const result = await User.signUp(email, password, fullName, role);

        if (result.success) {
            // Auto sign in after signup
            const signInResult = await User.signIn(email, password);
            if (signInResult.success) {
                window.location.href = '/projects';
            } else {
                navigate('/login');
            }
        } else {
            setError(result.error || 'Signup failed. Please try again.');
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center py-12 px-4">
            <Card className="w-full max-w-md shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900">Create Account</CardTitle>
                    <CardDescription className="text-lg">Join Estox and start investing</CardDescription>
                </CardHeader>

                <CardContent>
                    {error && (
                        <Alert variant="destructive" className="mb-6">
                            <AlertCircle className="w-4 h-4" />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <div className="relative">
                                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="pl-10"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10"
                                    placeholder="••••••••"
                                    required
                                    minLength={6}
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                I want to sign up as:
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRole('investor')}
                                    className={`p-4 border-2 rounded-xl transition-all ${role === 'investor'
                                            ? 'border-blue-900 bg-blue-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <TrendingUp className={`w-8 h-8 mx-auto mb-2 ${role === 'investor' ? 'text-blue-900' : 'text-gray-400'}`} />
                                    <p className={`font-semibold ${role === 'investor' ? 'text-blue-900' : 'text-gray-600'}`}>
                                        Investor
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Invest in projects
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setRole('admin')}
                                    className={`p-4 border-2 rounded-xl transition-all ${role === 'admin'
                                            ? 'border-purple-900 bg-purple-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <Briefcase className={`w-8 h-8 mx-auto mb-2 ${role === 'admin' ? 'text-purple-900' : 'text-gray-400'}`} />
                                    <p className={`font-semibold ${role === 'admin' ? 'text-purple-900' : 'text-gray-600'}`}>
                                        Admin
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Manage projects
                                    </p>
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-purple-900 hover:bg-purple-800 h-12 text-lg"
                            disabled={loading}
                        >
                            {loading ? 'Creating account...' : 'Create Account'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-purple-900 hover:text-purple-800 font-semibold">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

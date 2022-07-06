import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <Guest>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-5">
                    <label className="flex items-center justify-between">
                        <span className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </span>
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </Link>
                        )}
                    </label>
                </div>

                <div className="flex items-center mt-5">
                    <Button className="bg-blue-500 hover:bg-blue-600" processing={processing}>
                        Sign In
                    </Button>
                </div>

                <div className="flex justify-center mt-3 text-sm text-gray-400 font-bold">
                    OR
                </div>

                <a href={route('sso', 'google')} className="w-full inline-flex items-center justify-center mt-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 text-gray-500 font-medium rounded-md text-sm">
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png" className="mr-2" />
                    <span>Continue with Google</span>
                </a>

                <a href={route('sso', 'github')} className="w-full inline-flex items-center justify-center mt-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 text-gray-500 font-medium rounded-md text-sm">
                    <img src="https://img.icons8.com/ios-glyphs/24/000000/github.png" className="mr-2"/>
                    <span>Continue with Github</span>
                </a>

                <Link href={route('register')} className="flex justify-center mt-5 text-xs text-gray-400 font-medium">
                    Register for a new account
                </Link>
            </form>
        </Guest>
    );
}

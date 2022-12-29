import React, { FC, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './AuthForm.scss';

interface AuthFormProps {
    modal?: boolean;
    setModal?: (e: boolean) => void;
    registration: boolean;
    setRegistration: (e: boolean) => void;
}

const AuthForm: FC<AuthFormProps> = ({ modal, setModal, registration, setRegistration }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')
    const [checkBox, setCheckBox] = useState<boolean>(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (registration) {
            console.log(email, password, checkBox)
        }
        if (!registration) {
            console.log(email, password)
        }
        setEmail('')
        setPassword('')
        if (setModal) {
            setModal(false)
        }

    }

    if (!modal) {
        if (email) {
            setEmail('')
        }
        if (password) {
            setPassword('')
        }
        if (checkBox) {
            setCheckBox(false)
        }
        if (passwordConfirm) {
            setPasswordConfirm('')
        }
    }

    return (
        <form className="auth" onSubmit={handleSubmit}>
            {registration
                ? <div className="new__user">
                    Already have an account? <span onClick={() => setRegistration(false)}>Sign In</span>
                </div>
                : <div className="new__user">
                    New user? <span onClick={() => setRegistration(true)}>Create an account</span>
                </div>}
            <Input
                label='Email Address'
                placeholder='Enter your email'
                type='email'
                value={email}
                onChange={setEmail}
            />
            <Input
                label='Password'
                placeholder='******'
                type='password'
                value={password}
                onChange={setPassword}
            />
            {registration &&
                <>
                    < Input
                        label='Password confirm'
                        placeholder='******'
                        type='password'
                        value={passwordConfirm}
                        onChange={setPasswordConfirm}
                    />
                    <label className="checkbox__reg">
                        <input
                            type={'checkbox'}
                            checked={checkBox}
                            onChange={() => setCheckBox(!checkBox)}
                        />
                        <div className="auth__privacy">
                            By creating an account you agree to our <span>Privacy Policy</span> and <span>Terms of Service.</span>
                        </div>
                    </label>
                </>}
            <div className="auth__submit">
                {registration
                    ?
                    <div className="sign__up">
                        <Button>Sign up</Button>
                    </div>
                    : <>
                        <div className="auth__forgot">Forgot password?</div>
                        <Button>Log in</Button>
                    </>
                }
            </div>
            {!registration &&
                <div className="auth__privacy">
                    Protected by reCAPTCHA and subject to the Google <span>Privacy Policy</span> and <span>Terms of Service.</span>
                </div>}
        </form>
    );
}

export default AuthForm;
import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLoginMutation, useRegistrationMutation } from '../../services/apiAuth';
import { userFetching } from '../../store/reducers/user';
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
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [login, { isError: loginError }] = useLoginMutation();
    const [registrationSubmit, { isError: regError }] = useRegistrationMutation();
    const [checkBox, setCheckBox] = useState<boolean>(false)
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            if (!registration) {
                const user = await login({ email: values.email, password: values.password })
                if ("data" in user) {
                    dispatch(userFetching(user.data))
                    if (setModal) {
                        setModal(false)
                    }
                }
                values.email = ''
                values.password = ''
            }
            if (registration) {
                if (values.password === confirmPassword && checkBox) {
                    const user = await registrationSubmit({ email: values.email, password: values.password })
                    if ("data" in user) {
                        dispatch(userFetching(user.data))
                        if (setModal) {
                            setModal(false)
                        }
                    }
                }
                values.email = ''
                values.password = ''
                setConfirmPassword('')
            }
        }
    })

    if (!modal) {
        if (formik.values.email) {
            formik.values.email = ''
        }
        if (formik.values.password) {
            formik.values.password = ''
        }
        if (checkBox) {
            setCheckBox(false)
        }
        if (confirmPassword) {
            setConfirmPassword('')
        }
    }

    return (
        <form className="auth" onSubmit={formik.handleSubmit}>
            {registration
                ? <div className="new__user">
                    Already have an account? <span onClick={() => setRegistration(false)}>Sign In</span>
                </div>
                : <div className="new__user">
                    New user? <span onClick={() => setRegistration(true)}>Create an account</span>
                </div>}
            {loginError && <div className="error">email or password is not correct</div>}
            <Input
                name='email'
                label='Email Address'
                placeholder='Enter your email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <Input
                name='password'
                label='Password'
                placeholder='******'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            {registration &&
                <>
                    <Input
                        name='confirmPassword'
                        label='Password confirm'
                        placeholder='******'
                        type='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                        <Button type='submit'>Sign up</Button>
                    </div>
                    : <>
                        <div className="auth__forgot">Forgot password?</div>
                        <Button type='submit'>Log in</Button>
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
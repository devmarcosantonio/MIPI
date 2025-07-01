import logoMipi from '../../assets/images/mipi-logo.png';
import bgLogin from '../../assets/images/bglogin.jpg';
import logoEquatorial from '../../assets/images/logo-equatorial.png';
import logoEquatorialBranca from '../../assets/images/logo-equatorial-branca.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    const navigate = useNavigate();

    const onSubmit = (data: LoginForm) => {
        console.log(data);
        if(data.username === 'admin' && data.password === 'admin123') {
            navigate('/oee');
        }
    };

    // const onFinish = async (values: LoginFormValues) => {
    //     // setLoading(true);
    //     console.log('Form values:', values);
    //     // try {
    //     //   const success = await signIn(values.username, values.password);

    //     //   if (success) {
    //     //     navigate('/', { replace: true });
    //     //   }
    //     //   else {
    //     //     messageApi.open({
    //     //       type: 'error',
    //     //       content: 'Credenciais inválidas',
    //     //       style: {
    //     //         marginTop: '20vh',
    //     //       },
    //     //     });
    //     //   }
    //     // } catch (error) {
    //     //   console.log(error);
    //     //   messageApi.error('Erro ao tentar logar');
    //     // }
    //     // finally {
    //     //   setLoading(false);
    //     // }
    // };

    return (
        <div className='flex'>
            <section className='w-full md:w-1/2 h-screen flex flex-col items-center justify-center gap-5'>
                <section className='w-30'>
                    <img src={logoMipi} />
                </section>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-[50%] xl:w-[40%]'>
                    <label htmlFor="username">
                        <span className='block'>Usuário</span>

                        <input
                            type="text"
                            id="username"
                            placeholder="Usuário"
                            className={`border w-full p-1 rounded ${errors.username ? 'border-red-500' : 'border-gray-300'}`}
                            {...register('username', {
                                required: 'Usuário é obrigatório',
                                minLength: {
                                    value: 3,
                                    message: 'Usuário deve ter pelo menos 3 caracteres'
                                }
                            })}
                        />
                    </label>
                    {errors.username && (
                        <span className='text-red-500 text-sm'>{errors.username.message}</span>
                    )}
                    <label htmlFor="password">
                        <span className='block'>Senha</span>
                        <input
                            type="password"
                            id="password"
                            placeholder="Senha"
                            className={`border w-full p-1 rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            {...register('password', {
                                required: 'Senha é obrigatória',
                                minLength: {
                                    value: 6,
                                    message: 'Senha deve ter pelo menos 6 caracteres'
                                }
                            })}
                        />
                    </label>
                    {errors.password && (
                        <span className='text-red-500 text-sm'>{errors.password.message}</span>
                    )}
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded transition-colors duration-200"
                    >
                        Conecte-se
                    </button>
                </form>

                <img src={logoEquatorial} alt="Logo Equatorial" className='block w-40 md:hidden absolute bottom-5  m-auto' />

            </section>
            <section className='hidden relative md:flex items-center justify-center w-1/2 h-screen '>
                <img src={bgLogin} className='w-full h-full object-cover' />
                <img src={logoEquatorialBranca} className='absolute inset-0 m-auto w-80' />
            </section>
        </div>
    );
};

export default Login;
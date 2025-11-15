import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login, setAuthError } from '../../redux/slices/authSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../shared/hooks/useAppSelector';

interface LoginData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginData>();

  // Очистка ошибки при изменении полей
  useEffect(() => {
    const subscription = watch(() => {
      if (error) dispatch(setAuthError(null));
    });
    return () => subscription.unsubscribe();
  }, [watch, error, dispatch]);

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await fetch(`http://localhost:3000/users?email=${data.email}`);
      const users = await res.json();
      const user = users.find((u) => u.email === data.email && u.password === data.password);

      if (!user) {
        dispatch(setAuthError('Неверный email или пароль'));
        return;
      }

      dispatch(login(user));
      navigate('/');
    } catch (err) {
      dispatch(setAuthError('Ошибка входа'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        {...register('email', {
          required: 'Email обязателен',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Некорректный email',
          },
        })}
        placeholder="Email"
        type="email"
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

      <input
        {...register('password', {
          required: 'Пароль обязателен',
          minLength: {
            value: 6,
            message: 'Минимум 6 символов',
          },
        })}
        type="password"
        placeholder="Пароль"
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

      <button type="submit">Войти</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

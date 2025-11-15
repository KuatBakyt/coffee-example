import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, setAuthError } from '../../redux/slices/authSlice';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.auth.error);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  useEffect(() => {
    const subscription = watch(() => {
      if (error) dispatch(setAuthError(null));
    });
    return () => subscription.unsubscribe();
  }, [watch, error, dispatch]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch(`http://localhost:3000/users?email=${data.email}`);
      const users = await res.json();
      const exists = users.length > 0;

      if (exists) {
        dispatch(setAuthError('Пользователь уже существует'));
        return;
      }

      const newUser = {
        id: crypto.randomUUID(),
        email: data.email,
        password: data.password,
        name: data.name,
      };

      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });

      dispatch(register(newUser));
      navigate('/login');
    } catch (err) {
      dispatch(setAuthError('Ошибка регистрации'));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        {...formRegister('name', { required: 'Имя обязательно' })}
        placeholder="Имя"
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}

      <input
        {...formRegister('email', {
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
        {...formRegister('password', {
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

      <button type="submit">Зарегистрироваться</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};


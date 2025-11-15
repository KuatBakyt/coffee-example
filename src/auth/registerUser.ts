export const registerUser = async (email: string, password: string, name: string) => {
  const checkRes = await fetch(`http://localhost:3000/users?email=${email}`);
  const existingUsers = await checkRes.json();

  if (existingUsers.length > 0) {
    throw new Error('Пользователь с таким email уже существует');
  }

  const res = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Ошибка регистрации: ${error}`);
  }

  return await res.json();
};

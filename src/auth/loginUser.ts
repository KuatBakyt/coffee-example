export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
  const users = await res.json();
  if (users.length === 0) throw new Error('Неверные данные');
  return users[0];
};

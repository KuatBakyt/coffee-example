// import { createContext, useContext, useState, useEffect } from 'react';
// import { loginUser } from './loginUser';
// import { registerUser } from './registerUser';
// import type { User } from '../types';

// const AuthContext = createContext<{
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   register: (email: string, password: string, name: string) => Promise<void>;
//   logout: () => void;
// } | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = async (email: string, password: string) => {
//     const user = await loginUser(email, password);
//     setUser(user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   const register = async (email: string, password: string, name: string) => {
//     const user = await registerUser(email, password, name);
//     setUser(user);
//     localStorage.setItem('user', JSON.stringify(user));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     const stored = localStorage.getItem('user');
//     if (stored) setUser(JSON.parse(stored));
//   }, []);

//   return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
//   return ctx;
// };

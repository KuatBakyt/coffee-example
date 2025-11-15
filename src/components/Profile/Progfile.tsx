
import { logout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { useAppDispatch } from '../../shared/hooks/useAppDispatch';

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h2>Привет, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
};

export default Profile;

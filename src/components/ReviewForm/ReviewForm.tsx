import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { useAddPostMutation } from '../../api/reviewApi';

const ReviewForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [addPost, { isLoading, error }] = useAddPostMutation();
  const user = useAppSelector((state) => state.auth.user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !user) return;

    const newReview = {
      userId: user.id,
      name: user.name,
      rating,
      comment: text,
      date: new Date().toISOString(),
    };

    try {
      await addPost(newReview).unwrap();
      setText('');
      setRating(5);
    } catch (err) {
      console.error('Ошибка отправки отзыва:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Ваш отзыв"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            style={{ color: star <= rating ? 'gold' : 'gray' }}
          >
            ★
          </button>
        ))}
      </div>
      <button type="submit" disabled={isLoading || !user}>
        {isLoading ? 'Отправка...' : 'Оставить отзыв'}
      </button>
      {error && <p style={{ color: 'red' }}>Ошибка отправки отзыва</p>}
    </form>
  );
};

export default ReviewForm;

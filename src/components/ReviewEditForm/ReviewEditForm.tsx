// import { useState } from 'react';
// import type { Review } from '../../types';
// import { updateReview } from '../../services/reviewService';


// type Props = {
//   review: Review;
//   onComplete: (updated: Review) => void;
//   onCancel: () => void;
// };

// export const ReviewEditForm = ({ review, onComplete, onCancel }: Props) => {
//   const [rating, setRating] = useState(review.rating);
//   const [comment, setComment] = useState(review.comment);

//   const handleSave = async () => {
//     const updated = await updateReview(review.id, { rating, comment });
//     onComplete(updated);
//   };

//   return (
//     <div className="edit-form">
//       <h3>Редактировать отзыв</h3>
//       <select value={rating} onChange={e => setRating(Number(e.target.value))}>
//         {[1, 2, 3, 4, 5].map(n => (
//           <option key={n} value={n}>{n} ⭐</option>
//         ))}
//       </select>
//       <textarea value={comment} onChange={e => setComment(e.target.value)} />
//       <button onClick={handleSave}>Сохранить</button>
//       <button onClick={onCancel}>Отмена</button>
//     </div>
//   );
// };

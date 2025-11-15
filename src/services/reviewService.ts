// import type { Review } from "../types";


// const BASE_URL = 'http://localhost:3000/reviews';

// export const fetchReviews = async (): Promise<Review[]> => {
//   const res = await fetch(BASE_URL);
//   if (!res.ok) throw new Error('Ошибка загрузки отзывов');
//   return res.json();
// };

// export const postReview = async (review: Omit<Review, 'id'>): Promise<Review> => {
//   const res = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(review),
//   });
//   if (!res.ok) throw new Error('Ошибка отправки отзыва');
//   return res.json();
// };

// export const deleteReview = async (id: string) => {
//     const res = await fetch(`${BASE_URL}/${id}`,
//         {method: 'DELETE'}
//     );
//     if(!res.ok) throw new Error('Ошибка удаления отзыва');
// };


// export const updateReview = async (id: string, updated: Partial<Review>) => {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(updated),
//   });
//   if (!res.ok) throw new Error('Ошибка редактирования отзыва');
//   return res.json();
// };


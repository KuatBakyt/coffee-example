import type { Review } from '../../types'

type ReviewProps = {
  rev: Review;
}

const Review = ({ rev }: ReviewProps) => {
  return (
    <div>
      <h4>{rev.name}</h4>
      <p>Оценка: {rev.rating} ⭐</p>
      <p>{rev.comment}</p>
      <small>{new Date(rev.date).toLocaleDateString()}</small>
      {/* {user?.id === rev.userId && (
        <div className="review-actions">
          <button onClick={() => handleEditClick(rev)}>Редактировать</button>
          <button onClick={() => handleDelete(rev.id)}>Удалить</button>
        </div>
      )} */}
      </div>
  )
}

export default Review
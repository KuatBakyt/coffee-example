import { useGetPostsQuery } from '../../api/reviewApi';
import Review from '../Review/Review';


const ReviewList = () => {

    const { data: reviews = [], isLoading, error } = useGetPostsQuery();

    const renderReviews = () => {
        if (isLoading) {
            return <div className='loading'>Загрузка постов...</div>
        }
        if (error) {
            return <div className='error'>Ошибка загрузки</div>
        }
        if (!reviews?.length) {
            return <div className="empty-state">Посты не найдены</div>;
        }

        return reviews.map(rev => <Review key={rev.id} rev={rev} />)
    }


    // useEffect(() => {
    //     fetchReviews()
    //         .then(setReviews)
    //         .catch(console.error)
    //         .finally(() => setLoading(false));
    // }, []);

    // if (loading) return <p>Загрузка отзывов...</p>;

    // const handleDelete = async (id: string) => {
    //     await deleteReview(id);
    //     setReviews(reviews.filter(r => r.id !== id))
    // }

    // const handleEditClick = (review: Review) => {
    //     setEditingReview(review);
    // };

    // const handleEditComplete = (updated: Review) => {
    //     setReviews(reviews.map(r => (r.id === updated.id ? updated : r)));
    //     setEditingReview(null);
    // };


    return (
        <section>
            <h2>Отзывы</h2>
            {/* {editingReview && (
                <ReviewEditForm review={editingReview} onComplete={handleEditComplete} onCancel={() => setEditingReview(null)} />
            )} */}

            {renderReviews()}

            {/* {reviews.map(review => (
                <div key={review.id} className="review-card">
                    <h4>{review.name}</h4>
                    <p>Оценка: {review.rating} ⭐</p>
                    <p>{review.comment}</p>
                    <small>{new Date(review.date).toLocaleDateString()}</small>
                    {user?.id === review.userId && (
                        <div className="review-actions">
                            <button onClick={() => handleEditClick(review)}>Редактировать</button>
                            <button onClick={() => handleDelete(review.id)}>Удалить</button>
                        </div>
                    )}
                </div>
            ))} */}
        </section>
    );
};

export default ReviewList;
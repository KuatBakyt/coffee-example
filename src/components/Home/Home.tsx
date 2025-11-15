import  CoffeeCard  from '../CoffeeCard/CoffeeCard'
import { useGetPostsQuery } from '../../api/coffesApi'

const Home = () => {
  const { data: coffes = [], isLoading, error } = useGetPostsQuery();


  const renderCoffes = () => {
    if(isLoading){
      return <div className='loading'>Загрузка постов...</div>
    }
    if(error){
      return <div className='error'>Ошибка загрузки</div>
    }
    if(!coffes?.length){
       return <div className="empty-state">Посты не найдены</div>;
    }

    return coffes.map(item => <CoffeeCard key={item.id} item={item}/>)
  }


  return (
    <>
      <div className='cards'>
        {renderCoffes()}
      </div>
    </>
  )
}

export default Home
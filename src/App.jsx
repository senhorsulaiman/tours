import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false)
      setTours(tours)


    }
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }

  }
  const removeTour = (id) => {

    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour)
  }
  useEffect(() => {
    fetchTours()
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>

    )

  }
  if (tours.length < 1) {

    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>

    )
  }
  return (
    <main>
      <div >
        <h2 className="title">Our Tours </h2>
        <div className="title-underline"></div>
      </div>

      <Tours tours={tours} removeTour={removeTour} />


    </main>

  );
};
export default App;

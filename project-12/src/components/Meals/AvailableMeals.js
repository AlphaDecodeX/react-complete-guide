import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://custom-react-hooks-7c2be-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error("Something Went Wrong.....");
      }

      const responseData = await response.json();
      // console.log("Here is the Response : ", responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].description,
          name: responseData[key].name,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setIsLoding(false);
    }
    fetchMeals().catch((error) => {
      setIsLoding(false);
      setHttpError(error.message);
    });

  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return <section className={classes.mealsLoading}>
      <p>Loading.....</p></section>
  }

  if (httpError) {
    return <section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const coffeesData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm justify-around">
        <figure>
          <img src={coffee.photo} alt="coffee" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {coffee.name}</h2>
          <h2 className="card-title">Supplier: {coffee.supplier}</h2>
          <h2 className="card-title">Price: {coffee.price}</h2>
          <h2 className="card-title">Category: {coffee.category}</h2>
          <h2 className="card-title">Details: {coffee.details}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

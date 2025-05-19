import { IoEye, IoPencilSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees}) => {
  const { _id, name, photo, price, supplier } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(cof=> cof._id !== id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-around items-center bg-base-100 shadow-sm p-5">
        <figure>
          <img className="w-[193px] h-[240px]" src={photo} alt="Coffee" />
        </figure>
        <div className="">
          <h2 className="font-medium">
            Name: <span className="text-gray-600">{name}</span>
          </h2>
          <h2 className="font-medium">
            Price: <span className="text-gray-600">{price}</span>
          </h2>
          <h2 className="font-medium">
            Supplier: <span className="text-gray-600">{supplier}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <Link to={`/coffee/${_id}`}>
            <button className="btn btn-primary">
              <IoEye size={20} />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn  btn-info">
              <IoPencilSharp size={20} />
            </button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-error">
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

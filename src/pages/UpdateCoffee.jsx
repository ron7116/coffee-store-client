import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, price, supplier, taste, category, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
        }
      });
  };
  return (
    <div className="p-12">
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-6xl">Update Coffee</h2>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-black font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              className="input w-full"
              name="name"
              defaultValue={name}
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label  text-black font-semibold text-lg">
              Price
            </label>
            <input
              type="text"
              className="input w-full"
              name="price"
              defaultValue={price}
              placeholder="Enter Coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label  text-black font-semibold text-lg">
              Supplier
            </label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter Coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label  text-black font-semibold text-lg">
              Taste
            </label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              defaultValue={taste}
              placeholder="Enter Coffee Taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label  text-black font-semibold text-lg">
              Category
            </label>
            <input
              type="text"
              className="input w-full"
              name="category"
              defaultValue={category}
              placeholder="Enter Coffee Category"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label  text-black font-semibold text-lg">
              Details
            </label>
            <input
              type="text"
              className="input w-full"
              name="details"
              defaultValue={details}
              placeholder="Enter Coffee Details"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-6">
          <label className="label  text-black font-semibold text-lg">
            Photo URL
          </label>
          <input
            type="text"
            className="input w-full"
            name="photo"
            defaultValue={photo}
            placeholder="Enter Coffee Photo URL"
          />
        </fieldset>
        <input
          type="submit"
          className="btn w-full font-semibold text-lg"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;

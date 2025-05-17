import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="p-12">
      <div className="text-center space-y-4 mb-4">
        <h2 className="text-6xl">Add New Coffee</h2>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-black font-semibold text-lg">
              Name
            </label>
            <input
              type="text"
              className="input w-full"
              name="name"
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
            placeholder="Enter Coffee Photo URL"
          />
        </fieldset>
        <input
          type="submit"
          className="btn w-full font-semibold text-lg"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;

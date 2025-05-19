import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = form.email.value;
    const { password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        const userProfile = {
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // save database user details
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Your profile has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              console.log("after data profile in db", data);
              e.target.reset();
            }
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <div className="card bg-base-100  max-w-sm mx-auto mt-5 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <form onSubmit={handleSignUp} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="address"
              className="input"
              placeholder="Address"
            />
            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              className="input"
              placeholder="Phone Number"
            />
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

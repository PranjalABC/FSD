import "./App.css";

import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Infrastructure Facilities</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required",maxLength:20 })}
                onKeyUp={() => {
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">ID:</label>
              <input
                type="text"
                className={`form-control ${errors.id && "invalid"}`}
                {...register("id", {
                  required: "id is Required",
                  min: {
                    value: 1,
                    message: "Minimum Required id is 1",
                  },
                  max: {
                    value: 111,
                    message: "Maximum allowed id is 111",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  }
                })}
                onKeyUp={() => {
                  trigger("id");
                }}
              />
              {errors.id && (
                <small className="text-danger">{errors.id.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">
                Facilities:
                <select>
            <option value="classroom">Classroom</option>
            <option value="labs">Labs</option>
            <option value="hostels">Hostels</option>
            <option value="ground">Ground</option>
            </select>
              </label>
            </div>
            <div className="form-group">
              <label className="col-form-label">Rating:</label>
              <input
                type="text"
                className={`form-control ${errors.rating && "invalid"}`}
                {...register("rating", { required: "Rating is Required",
                pattern: {
                  value: /^[1-5]*$/,
                  message: "Invalid rating",
                },
               })}
               onKeyUp={() => {
                trigger("rating");
              }}
              />
              {errors.rating && (
                <small className="text-danger">{errors.rating.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Review:</label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Review is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 150,
                  message: "Maximum allowed length is 150 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

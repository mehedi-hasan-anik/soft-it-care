import "./Form.styles.css";

const Form = () => {
  return (
    <div className="form-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="form-title">Login Your Account</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary login-btn">
                Login
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h3 className="form-title">Register Now</h3>
            <form>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I accept all the term conditions, Including privacy policy
                </label>
              </div>
              <button type="submit" className="btn btn-light border">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

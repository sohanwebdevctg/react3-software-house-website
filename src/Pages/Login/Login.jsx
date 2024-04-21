import React from 'react';

const Login = () => {

  const loginData = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    form.reset();
  }

  return (
    <div className='my-14'>
      <div className='container mx-auto flex justify-center'>
        <div className="w-full md:w-2/4 shadow-2xl bg-base-100">
          <form onSubmit={loginData} className="card-body">
            <h1 className='text-2xl font-bold mx-auto'>LogIn</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered"/>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
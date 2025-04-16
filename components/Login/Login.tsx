import React from "react";
import Form from "./Form";

const Login = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Rajesh India</h1>
            <ul className="list bg-base-100 rounded-box shadow-md mt-10">
              <li className="p-4 pb-2 text-xl opacity-60 tracking-wide">
              🚀 Simplify Billing, Streamline Business!
              </li>

              <li className="list-row items-center">
                <div className="text-4xl font-thin opacity-30 tabular-nums">
                  01
                </div>
                <div>
                  <p className="text-xl"><strong>Faster Invoicing –</strong> Generate GST-compliant invoices instantly</p>
                </div>
                
              </li>
            </ul>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

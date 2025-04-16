"use client";
import Link from "next/link";
import React from "react";

const Invoice = ({ isNew, data }: { isNew: boolean; data: object }) => {
  return (
    <div className="">
      <div className="flex justify-between pb-5">
        <h1 className="text-center text-4xl uppercase text-white">
          Invoive - 0001
        </h1>
        <div className="flex gap-10">
          <Link href="/invoice?operation=edit&id=0001">
            <button className="btn button-style">Download</button>
          </Link>
          <Link href="/invoice?operation=edit&id=0001">
            <button className="btn button-style">Save</button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/4">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="input"
              required
              placeholder="Site"
              minLength={3}
              maxLength={30}
            />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>
        </div>
        <div className="">
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input type="date" required placeholder="Site" />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>
        </div>
      </div>
      <h2 className="text-center text-white uppercase text-3xl">Items</h2>
      <div className="overflow-x-auto mt-5 bg-white rounded-2xl">
        <table className="table table-xl">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th width="50%">Name</th>
              <th>Rate</th>
              <th>Quentity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>

            {/* row 1 */}
            <tr>
              <th className="text-primary">1</th>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                  disabled
                />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th className="text-primary">2</th>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                  disabled
                />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th className="text-primary">3</th>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary w-full"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Primary"
                  className="input input-primary"
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
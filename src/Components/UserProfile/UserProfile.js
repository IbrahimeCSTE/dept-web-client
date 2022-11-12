import React, { useState } from "react";
import AssignmentForm from "../AssignmentCoverPage/AssignmentForm";
import Loading from "../Common/Loading";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import RegistrationFormView from "../RegistrationForm/RegistrationFormView";
import styles from "./UserProfile.css";
export default function () {
  const [page, setPage] = useState();
  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className={`drawer-toggle drawer_height`}
        />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer"
            className="p-4 cursor-pointer drawer-button bg-blue-900 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div className="flex-1">
            {page ? (
              <>
                {page === "RegistrationForm" && <RegistrationForm />}
                {page === "RegistrationView" && <RegistrationFormView />}
                {page === "AssignmentForm" && <AssignmentForm />}
              </>
            ) : (
              <div className="pt-2 px-5 flex-1 border-l flex-1  mb-4">
                <h2 className="text-2xl">
                  Welcome,{" "}
                  <span className="font-semibold text-blue-900">
                    Mohammad Borhan
                  </span>
                </h2>

                <div>
                  <table className="border mt-5">
                    <tbody>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Name</td>
                        <td className="">Borhan</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Father's Name</td>
                        <td className="">ABC</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Mother's Name</td>
                        <td className="">DEF</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Department</td>
                        <td className="">CSTE</td>
                      </tr>
                      <tr className="border ">
                        <td className="bg-slate-100 border">Session</td>
                        <td className="">2200121</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Year</td>
                        <td className="">01</td>
                      </tr>
                      <tr>
                        <td className="bg-slate-100 border">Term</td>
                        <td className="">01</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <h2 className="my-5 text-xl">Result</h2>
                      <table className=" border mt-2">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">1-1</td>
                            <td className="">Borhan</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">1-2</td>
                            <td className="">ABC</td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 border">2-1</td>
                            <td className="">DEF</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">2-2</td>
                            <td className="">CSTE</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">3-1</td>
                            <td className="">2200121</td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 border">3-2</td>
                            <td className="">01</td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 border">4-1</td>
                            <td className="">01</td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 border">4-4</td>
                            <td className="">01</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex-1">
                      <h2 className="my-5 text-xl">Result</h2>
                      <table className=" border mt-2 ">
                        <tbody>
                          <tr className="border ">
                            <td className="bg-slate-100 border">1-1</td>
                            <td className="">Borhan</td>
                          </tr>
                          <tr className="border ">
                            <td className="bg-slate-100 border">1-2</td>
                            <td className="">ABC</td>
                          </tr>
                          <tr>
                            <td className="bg-slate-100 border">2-1</td>
                            <td className="">DEF</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <button onClick={() => setPage("")}>Home</button>
            </li>
            <li>
              <button onClick={() => setPage("RegistrationForm")}>
                Registration Form
              </button>
            </li>
            <li>
              <button onClick={() => setPage("RegistrationView")}>
                Registration View
              </button>
            </li>
            <li>
              <button onClick={() => setPage("AssignmentForm")}>
                AssignmentForm
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
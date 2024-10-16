import React from "react";

const navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>My Work</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default navbar;

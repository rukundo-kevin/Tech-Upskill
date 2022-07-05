import React from "react";
import PropTypes from "prop-types";

export const FormAction = ({ handleSubmit, type, action, text }) => {
  return (
    <>
      {type === "Button" ? (
        <button
          type={action !== "button" ? action : "button"}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
          onSubmit={handleSubmit}
        >
          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

FormAction.propTypes = {
  handleSubmit: PropTypes.func,
  type: PropTypes.string,
  action: PropTypes.string,
  text: PropTypes.string,
};

FormAction.defaultProps = {
  handleSubmit: () => {},
  type: "Button",
  action: "submit",
  text: "",
};

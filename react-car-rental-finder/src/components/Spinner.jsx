import React from "react";

const Spinner = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="w-16 h-16 border-4 border-t-4 border-teal-500 border-t-teal-200 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner

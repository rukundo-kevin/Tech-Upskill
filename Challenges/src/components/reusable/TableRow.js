import React from "react";

const TableRow = ({ data }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {data === 'false'? 'false': data}
    </td>
  );
};

export default TableRow;

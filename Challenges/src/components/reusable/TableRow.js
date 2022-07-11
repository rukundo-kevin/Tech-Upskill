import React from "react";

const TableRow = ({ data }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {/* {!data && typeof data == 'object'? 'false': data} */}
      {!(typeof data == 'object') &&  data}
      {typeof data == 'object' && data.map(item=> <li key={item.id}>{item.title}</li>)}
    </td>
  );
};

export default TableRow;

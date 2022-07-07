import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ columns }) => {
  return (
    <tbody>
      {columns.map((column) => (
        <tr key={column.id}>
          {Object.values(column).map((data, index) => <TableRow key={index} data={data}/>)}
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <button className="group relative w-16 flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-sm text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Update
            </button>
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <button className="group relative w-16 flex justify-center py-1 px-2 border border-transparent text-sm font-medium rounded-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody;

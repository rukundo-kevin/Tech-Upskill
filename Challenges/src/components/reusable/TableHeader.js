import React from "react";

const TableHeader = ({ columns }) => {
  return (
    <thead className="bg-white border-b">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left font-bold"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

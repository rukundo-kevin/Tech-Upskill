import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ data, columns }) => {
  console.log(data);
  return (
    <table className="min-w-full border">
      <TableHeader columns={columns} />
      <TableBody columns={data} fields={columns}/>
    </table>
  );
};

export default Table;

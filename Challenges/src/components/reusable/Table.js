import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ data, columns, handleDelete, handleUpdate }) => {
  return (
    <table className="min-w-full border">
      <TableHeader columns={columns} />
      <TableBody columns={data} fields={columns} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </table>
  );
};

export default Table;

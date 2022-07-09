import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from "../../api";
import { employeeColumns } from "../../constants/tableColumns";
import Button from "../reusable/Button";
import Table from "../reusable/Table";

const Employee = () => {
  const [employees, setEmployee] = React.useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getUsers());
  }, [ dispatch]);

  console.log(employees);

  return (
    <div className="flex flex-col p-4">
      <Button onClick={undefined} customClass=" bg-blue-500 hover:bg-blue-600 ">
        Add
      </Button>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Table columns={employeeColumns} data={employees} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;

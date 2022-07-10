import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { CSVLink, CSVDownload } from "react-csv";

import { getUsers } from "../../api";
import { employeeColumns } from "../../constants/tableColumns";
import Button from "../reusable/Button";
import Table from "../reusable/Table";

const Employee = () => {
  const {employees} = useSelector(state=>state.user)
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="flex flex-col p-4">
      <div className="font-bold flex justify-center">
        There are {employees.length} Employees
      </div>
      <div className="flex  ">
      <Button onClick={undefined} customClass="ml-4 bg-blue-500 hover:bg-blue-600 w-24">
        Add New
      </Button>
      <Button onClick={undefined} customClass="ml-4 bg-green-500 hover:bg-green-600 w-24">
      <CSVLink data={employees} filename="employees">Save Csv </CSVLink>
      </Button>
      <Button onClick={undefined} customClass="ml-4 bg-teal-500 hover:bg-teal-600 w-24">
        Save Pdf 
      </Button>
      </div>
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

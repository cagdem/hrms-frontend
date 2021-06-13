import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import EmployeeService from "../services/employeeService";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getEmployees()
      .then((result) => setEmployees(result.data.data));
  });

  return (
    <div>
        Is arayan
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adi</Table.HeaderCell>
            <Table.HeaderCell>Soyadi</Table.HeaderCell>
            <Table.HeaderCell>Kimlik Numarasi</Table.HeaderCell>
            <Table.HeaderCell>Dogum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>{employee.firstName}</Table.Cell>
              <Table.Cell>{employee.lastName}</Table.Cell>
              <Table.Cell>{employee.natId}</Table.Cell>
              <Table.Cell>{employee.birthDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

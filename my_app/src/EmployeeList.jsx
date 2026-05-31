import React, { Component } from "react";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, name: "Amit", role: "Developer" },
        { id: 2, name: "Sohan", role: "Data scientist" },
        { id: 3, name: "Mohan", role: "Cloud Developer" },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
          }}
        >
          <thead style={{ backgroundColor: "#f4f4f4" }}>
            <tr>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>ID</th>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>Name</th>
              <th style={{ padding: "8px", border: "1px solid #ccc" }}>Role</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {employee.id}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {employee.name}
                </td>
                <td style={{ padding: "8px", border: "1px solid #ccc" }}>
                  {employee.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;

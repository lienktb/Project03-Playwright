export const employeeData = {
  validEmployee: {
    firstName: "Ess",
    middleName: "O",
    lastName: "Orange",
    employeeId: "1000"
  },
  noMiddleName: {
    firstName: "Ess",
    lastName: "Orange",
    employeeId: "1000"
  },
  noFirstName: {
    firstName: "",
    middleName: "O",
    lastName: "Orange",
    employeeId: "1000"
  },
  noLastName: {
    firstName: "Ess",
    middleName: "O",
    lastName: "",
    employeeId: "1000"
  },
  noEmployeeId: {
    firstName: "Ess",
    middleName: "O",
    lastName: "Orange",
    employeeId: ""
  },
  employeeLongName: {
    firstName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    middleName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    lastName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    employeeId: "1000"
  },
  invalidEmployeeId: {
    firstName: "Ess",
    middleName: "D",
    lastName: "Orange",
    employeeId: "abc12345678"
  }
}
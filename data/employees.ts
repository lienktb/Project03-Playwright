export const employeeData = {
  validEmployee: {
    firstname: "Ess",
    middleName: "O",
    lastName: "Orange",
    employeeId: "1000"
  },
  noMiddleName: {
    firstname: "Ess",
    lastName: "Orange",
    employeeId: "1000"
  },
  noFirstName: {
    firstname: "",
    middleName: "O",
    lastName: "Orange",
    employeeId: "1000"
  },
  noLastName: {
    firstname: "",
    middleName: "O",
    lastName: "Orange",
    employeeId: "1000"
  },
  noEmployeeId: {
    firstname: "Ess",
    middleName: "O",
    lastName: "Orange",
    employeeId: ""
  },
  employeeLongName: {
    firstname: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    middleName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    lastName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567",
    employeeId: "1000"
  },
  invalidEmployeeId: {
    firstname: "Ess",
    middleName: "D",
    lastName: "Orange",
    employeeId: "abc12345678"
  }
}
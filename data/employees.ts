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
    firstname: "Ess",
    middleName: "O",
    lastName: "",
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
  },
  accountValid: {
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: "orange123"
  },
  accountNoFields: {
    username: "",
    status: true,
    password: "",
    confirmPassword: ""
  },
  accountNoUsername: {
    username: "",
    status: true,
    password: "orange123",
    confirmPassword: "orange123"
  },
  accountNoPassword: {
    username: "Ess Orange",
    status: true,
    password: "",
    confirmPassword: ""
  },
  passwordTooShort: {
    username: "Ess Orange",
    status: true,
    password: "sai12",
    confirmPassword: "sai12"
  },
  accountNumberPassword: {
    username: "Ess Orange",
    status: true,
    password: "123456789",
    confirmPassword: "123456789"
  },
  accountNoConfirmPassword: {
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: ""
  },
  accountInvalidConfirmPassword: {
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: "sai12"
  }
}
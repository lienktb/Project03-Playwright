export const accountData = {
  accountValid: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: "orange123",
    employeeName: ""
  },
  accountValidDisabled: {
    role: "ESS",
    username: "Ess Orange",
    status: false,
    password: "orange123",
    confirmPassword: "orange123"
  },
  accountNoFields: {
    role: "ESS",
    username: "",
    status: true,
    password: "",
    confirmPassword: ""
  },
  accountNoUsername: {
    role: "ESS",
    username: "",
    status: true,
    password: "orange123",
    confirmPassword: "orange123"
  },
  accountNoPassword: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "",
    confirmPassword: ""
  },
  passwordTooShort: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "sai12",
    confirmPassword: "sai12"
  },
  accountNumberPassword: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "123456789",
    confirmPassword: "123456789"
  },
  accountNoConfirmPassword: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: ""
  },
  accountInvalidConfirmPassword: {
    role: "ESS",
    username: "Ess Orange",
    status: true,
    password: "orange123",
    confirmPassword: "sai12"
  },
  accountAdmin: {
    role: "Admin",
    username: "Admin Orange",
    status: true,
    password: "admin123",
    confirmPassword: "admin123"
  },
  accountAdminDisabled: {
    role: "Admin",
    username: "Admin Orange",
    status: false,
    password: "admin123",
    confirmPassword: "admin123"
  }
}
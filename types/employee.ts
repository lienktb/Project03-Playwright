export type Employee = {
  firstName: string;
  middleName?: string;
  lastName: string;
  employeeId: string;
};

export type Account = {
  role?: string,
  username: string;
  password: string;
  confirmPassword: string;
  status: boolean;
  employeeName?: string;
};

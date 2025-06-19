import { Account, Employee } from "../types/employee";

export function buildEmployeeData(
  employee: Employee,
  account?: Account,
  fileUrl?: string
) {
  return {
    employee,
    account,
    fileUrl
  };
}

export function buildAccountWithEmployee(account: Account, employee: Employee) {
  return {
    ...account,
    employeeName: `${employee.firstName} ${employee.middleName ?? ''} ${employee.lastName}`.replace(/\s+/g, ' ').trim()
  };
}
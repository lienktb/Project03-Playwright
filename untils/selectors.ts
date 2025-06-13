export const selectors = {
    basePage: {
        mainTitle: ".orangehrm-main-title",
        buttonDeleteConfirm: /Yes, Delete/,
        tableBody: ".oxd-table-body",
        tableItem: ".oxd-table-card",
        tableLoader: ".oxd-table-loader",
        tableDecoratorCard:".orangehrm-container"
    },
    header: {
        userDropdownButton: ".oxd-userdropdown",
        dropdownMenu: ".oxd-dropdown-menu",
        logoutText: "text=Logout",
    },
    sidebar: {
        menuPIM: "text=PIM"
    },
    loginPage: {
        username: "//input[@name='username']",
        password: "//input[@name='password']",
        buttonLogin: "//button[@type='submit']",
        errorMessageUsername: "//label[text()='Username']/ancestor::div[2]//span",
        errorMessagePassword: "//label[text()='Password']/ancestor::div[2]//span",
        alertErrorMessage: "//div[@class='orangehrm-login-error']//div[@role='alert']",
        alertErrorText: "//div[@class='orangehrm-login-error']//div[@role='alert']//p"
    },
    adminDashboardPage: {
        menuItems: ".oxd-sidepanel-body .oxd-main-menu-item",
        dashboardGrid: ".orangehrm-dashboard-grid"
    },
    employeeListPage: {
        employeeList: ".orangehrm-employee-list",
        filterEmployeeId: "//label[text()='Employee Id']//ancestor::div[2]//input",
        buttonEdit: "//div[@class='oxd-table-cell-actions']/button[1]",
        buttonDelete: "//div[@class='oxd-table-cell-actions']/button[2]",
        buttonSearch: /Search/,
        resultsText: "//div[@class='orangehrm-header-container']/following-sibling::div[1]//span[contains(@class, 'oxd-text')]"
        
    },
    addEmployeePage: {
        buttonAddEmployee: /Add Employee/,
        buttonAdd: "//button[contains(., 'Add')]",
        firstName: ".orangehrm-firstname",
        middleName: ".orangehrm-middlename",
        lastName: ".orangehrm-lastname",
        employeeId: "//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        fileUpload: "input[type='file']",
        buttonSave: /Save/,
        chooseFile: ".oxd-file-div",
        chooseFileError: ".oxd-file-div--error",
        errorMessageFirstName: "//input[@name='firstName']/ancestor::div[2]//span",
        errorMessageMiddleName: "//input[@name='middleName']/ancestor::div[2]//span",
        errorMessageLastName: "//input[@name='lastName']/ancestor::div[2]//span",
        errorMessageEmployeeId: "//label[text()='Employee Id']//ancestor::div[2]//span",
        errorMessageFile: "//input[@class='oxd-file-input']/ancestor::div[2]//span"
    },
    editEmployeePage: {
        editContainer: ".orangehrm-edit-employee"
    }
}
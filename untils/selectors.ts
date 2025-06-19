export const selectors = {
    basePage: {
        mainTitle: ".orangehrm-main-title",
        buttonDeleteConfirm: /Yes, Delete/,
        tableBody: ".oxd-table-body",
        tableItem: ".oxd-table-card",
        tableCell: ".oxd-table-cell",
        tableLoader: ".oxd-table-loader",
        tableDecoratorCard:".orangehrm-container",
        buttonAdd: "//button[contains(., 'Add')]",
        buttonSave: "Save",
        searching: "Searching....",
        noRecords: "No Records Found",
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
        filterEmployeeName: "//label[text()='Employee Name']//ancestor::div[2]//input",
        buttonEdit: "//div[@class='oxd-table-cell-actions']/button[1]",
        buttonDelete: "//div[@class='oxd-table-cell-actions']/button[2]",
        buttonSearch: /Search/,
        resultsText: "//div[@class='orangehrm-header-container']/following-sibling::div[1]//span[contains(@class, 'oxd-text')]"
        
    },
    addEmployeePage: {
        buttonAddEmployee: "Add Employee",
        buttonEmployeeList: "Employee List",
        buttonAdd: "//button[contains(., 'Add')]",
        firstName: ".orangehrm-firstname",
        middleName: ".orangehrm-middlename",
        lastName: ".orangehrm-lastname",
        employeeId: "//label[text()='Employee Id']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        fileUpload: "input[type='file']",
       
        chooseFile: ".oxd-file-div",
        chooseFileErrorClass: "oxd-file-div--error",
        errorMessageFirstName: "//input[@name='firstName']/ancestor::div[2]//span",
        errorMessageMiddleName: "//input[@name='middleName']/ancestor::div[2]//span",
        errorMessageLastName: "//input[@name='lastName']/ancestor::div[2]//span",
        errorMessageEmployeeId: "//label[text()='Employee Id']//ancestor::div[2]//span",
        errorMessageFile: "//input[@class='oxd-file-input']/ancestor::div[2]//span",
        username: "//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        password: "//label[text()='Password']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        confirmPassword: "//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        disabledStatus: "//label[contains(., 'Disabled')]",
        enabledStatus: "//label[contains(., 'Enabled')]",
        buttonCreateLogin: "//p[text()='Create Login Details']/ancestor::div[contains(@class, 'user-form-header')]//div",
        errorMessageUsername: "//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]//span",
        errorMessagePassword: "//label[text()='Password']/ancestor::div[contains(@class, 'oxd-input-group')]//span",
        errorMessageConfirmPassword: "//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]//span",
    },
    editEmployeePage: {
        editContainer: ".orangehrm-edit-employee"
    },
    addUserPage: {
        username: "//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        password: "//label[text()='Password']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        confirmPassword: "//label[text()='Confirm Password']/ancestor::div[contains(@class, 'oxd-input-group')]//input",
        selectStatus: "//label[contains(.,'Status')]/parent::div/following-sibling::div",
        enabledStatus: "//label[contains(.,'Status')]/parent::div/following-sibling::div//div[contains(.,'Enabled') and @class='oxd-select-option']",
        disabledStatus: "//label[contains(.,'Status')]/parent::div/following-sibling::div//div[contains(.,'Disabled') and @class='oxd-select-option']",
        userRole: "User Role",
        status: "Status",
        enabled: "Enabled",
        disabled: "Disabled",
        searching: "Searching....",
        noRecords: "No Records Found",
        employeeName: "Employee Name",
        selectRole: "//label[contains(.,'User Role')]/parent::div/following-sibling::div",
        role: "//label[contains(.,'User Role')]/parent::div/following-sibling::div//div[contains(.,'%s') and @class='oxd-select-option']",
        ESSRole: "//label[contains(.,'User Role')]/parent::div/following-sibling::div//div[contains(.,'ESS') and @class='oxd-select-option']",
    }
}
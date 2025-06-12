export const selectors = {
    header: {
        userDropdownButton: ".oxd-userdropdown",
        dropdownMenu: ".oxd-dropdown-menu",
        logoutText: "text=Logout"
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
    }
}
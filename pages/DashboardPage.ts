import { expect, Page } from "@playwright/test";
import BasePage from "./BasePage";
import { selectors } from "../untils/selectors";

export default class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    
}
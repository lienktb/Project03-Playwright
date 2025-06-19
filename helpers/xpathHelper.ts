const getDropdownOption = (label: string, value: string) => {
  return `//label[contains(.,'${label}')]/parent::div/following-sibling::div//div[contains(.,'${value}') and @class='oxd-select-option']`;
}

const getDropdownSelect = (label: string) => {
  return `//label[contains(.,'${label}')]/parent::div/following-sibling::div`;
}

const getAutocompleteInput = (label: string) => {
  return `//label[contains(.,'${label}')]/parent::div/following-sibling::div//input`;
}

const getAutocompleteDropdown = (label: string) => {
  return `//label[contains(.,'${label}')]/parent::div/following-sibling::div//div[contains(@class,'oxd-autocomplete-dropdown')]`;
}

const getAutocompleteOption = (label: string, value: string) => {
  return `//label[contains(.,'${label}')]/parent::div/following-sibling::div//div[contains(.,'${value}') and @class='oxd-autocomplete-option']`;
}

export { 
    getDropdownOption, 
    getDropdownSelect,
    getAutocompleteInput,
    getAutocompleteDropdown,
    getAutocompleteOption
}
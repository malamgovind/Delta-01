function checkCheckboxes(currentCheckbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked);


    if (checkedCheckboxes.length > 2) {
        for (const checkbox of checkedCheckboxes) {
            if (checkbox !== currentCheckbox) {
                checkbox.checked = false;
                break;
            }
        }
    }
}
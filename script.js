const codeTak = document.getElementById('codeYes');
const codeNie = document.getElementById('codeNo');
const langCheckboxes = document.querySelectorAll('input[name="lang"]');

function updateLangCheckboxes() {
    const isCodeYesSelected = codeTak.checked;

    langCheckboxes.forEach(checkbox => {
        if (isCodeYesSelected) {
            checkbox.disabled = false;
        } else {
            checkbox.disabled = true;
            checkbox.checked = false;
        }
    });
}

codeTak.addEventListener('change', updateLangCheckboxes);
codeNie.addEventListener('change', updateLangCheckboxes);

function topMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    console.log('toggled Menu');
}

updateLangCheckboxes();
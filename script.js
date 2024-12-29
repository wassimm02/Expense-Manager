document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('list');
    const languageSelect = document.getElementById('language');

    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addExpense();
    });

    languageSelect.addEventListener('change', function() {
        switchLanguage(this.value);
    });

    function addExpense() {
        const name = document.getElementById('expense-name').value;
        const amount = document.getElementById('expense-amount').value;
        const currency = document.getElementById('currency').value;

        const li = document.createElement('li');
        li.textContent = `${name}: ${amount} ${currency}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            expenseList.removeChild(li);
        });

        li.appendChild(deleteButton);
        expenseList.appendChild(li);

        expenseForm.reset();
    }

    function switchLanguage(lang) {
        if (lang === 'ar') {
            document.documentElement.lang = 'ar';
            document.body.style.direction = 'rtl';
            document.querySelector('h1').textContent = 'مدير النفقات';
            document.getElementById('expense-name').placeholder = 'اسم النفقة';
            document.getElementById('expense-amount').placeholder = 'المبلغ';
            document.querySelector('button[type="submit"]').textContent = 'أضف نفقة';
            document.querySelector('#expense-list h2').textContent = 'قائمة النفقات';
            document.querySelector('label[for="language"]').textContent = 'اختر اللغة:';
        } else {
            document.documentElement.lang = 'en';
            document.body.style.direction = 'ltr';
            document.querySelector('h1').textContent = 'Expense Manager';
            document.getElementById('expense-name').placeholder = 'Expense Name';
            document.getElementById('expense-amount').placeholder = 'Amount';
            document.querySelector('button[type="submit"]').textContent = 'Add Expense';
            document.querySelector('#expense-list h2').textContent = 'Expense List';
            document.querySelector('label[for="language"]').textContent = 'Select Language:';
        }
    }
});
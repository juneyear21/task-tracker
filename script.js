const tasks = document.querySelectorAll('.task-container');
const inputs = document.querySelectorAll('.input_text');
const showError = document.querySelector('.progress-bar')
const progressbar = document.querySelector('.progress-bar')
const progressval = document.querySelector('.progress-val')

tasks.forEach((task, index) => {
    const checkbox = task.querySelector('.custom-checkbox');
    const input = inputs[index];
    let proval = 0;
    checkbox.addEventListener('click', () => {
        const checkInput = [...inputs].every((input) =>{
           return input.value.trim() !== ''
        });
        
        if (checkInput) {
            task.classList.toggle('completed');
             proval += 33.33
             progressval.style.width = proval + '%';
        } else {
            showError.classList.add('showerror');
        }
    });

    input.addEventListener('focus', () => {
        showError.classList.remove('showerror');
    });

    input.addEventListener('input', () => {
        if (input.value.trim() === "") {
            task.classList.remove('completed');
        }
    });
});

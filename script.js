const tasks = document.querySelectorAll('.task-container');
const inputs = document.querySelectorAll('.input_text');
const showError = document.querySelector('.progress-bar')
const progressbar = document.querySelector('.progress-bar')
const progressval = document.querySelector('.progress-val')
const totalTasks = tasks.length;
let completedTasks = 0;

tasks.forEach((task, index) => {
    const checkbox = task.querySelector('.custom-checkbox');
    const input = inputs[index];
    checkbox.addEventListener('click', () => {
        const checkInput = [...inputs].every((input) =>{
           return input.value.trim() !== ''
        });
        if (checkInput) {
            task.classList.toggle('completed');
            if (task.classList.contains('completed')) {
                completedTasks++;
            } else {
                completedTasks--;
            }
            const progressWidth = (completedTasks / totalTasks) * 100;
            progressval.style.width = progressWidth + '%';
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

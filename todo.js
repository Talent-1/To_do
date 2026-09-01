const my_task_list = document.getElementById('my-tasks');
console.log(my_task_list);

const activeTaskContainer = document.querySelector('.active-task');


// -----------------------------
// PRIORITY CONTAINERS
// -----------------------------

const highPriority = document.createElement('div');
highPriority.id = 'high-priority';
activeTaskContainer.appendChild(highPriority);

const mediumPriority = document.createElement('div');
mediumPriority.id = 'medium-priority';
activeTaskContainer.appendChild(mediumPriority);

const lowPriority = document.createElement('div');
lowPriority.id = 'low-priority';
activeTaskContainer.appendChild(lowPriority);


// -----------------------------
// CREATE TASK BUTTON
// -----------------------------

const create_task = document.querySelector('#create-task');

create_task.addEventListener('click', () => {

    // Create the form
    const taskForm = document.createElement('form');


    // -----------------------------
    // TASK NAME
    // -----------------------------

    const taskName = document.createElement('input');

    taskName.type = 'text';
    taskName.placeholder = 'Enter task title';

    taskForm.appendChild(taskName);


    // Error message
    // Created ONCE for this form
    const taskNameErr = document.createElement('p');

    taskNameErr.style.color = '#f00';

    taskForm.appendChild(taskNameErr);


    // -----------------------------
    // TASK DESCRIPTION
    // -----------------------------

    const task_des = document.createElement('textarea');

    task_des.rows = 5;
    task_des.placeholder = 'Enter task description';

    taskForm.appendChild(task_des);


    // -----------------------------
    // START DATE
    // -----------------------------

    const startDate = document.createElement('input');

    startDate.type = 'date';

    taskForm.appendChild(startDate);


    // -----------------------------
    // PRIORITY
    // -----------------------------

    const priority = document.createElement('select');


    const option1 = document.createElement('option');

    option1.textContent = 'Low';
    priority.appendChild(option1);


    const option2 = document.createElement('option');

    option2.textContent = 'Medium';
    priority.appendChild(option2);


    const option3 = document.createElement('option');

    option3.textContent = 'High';
    priority.appendChild(option3);


    taskForm.appendChild(priority);


    // -----------------------------
    // REMINDER
    // -----------------------------

    const reminder = document.createElement('input');

    reminder.type = 'time';

    taskForm.appendChild(reminder);


    // Add form to page
    my_task_list.appendChild(taskForm);


    // -----------------------------
    // SAVE BUTTON
    // -----------------------------

    const saveButton = document.createElement('button');

    saveButton.type = 'button';
    saveButton.textContent = 'Save Task';

    taskForm.appendChild(saveButton);


    // -----------------------------
    // SAVE TASK
    // -----------------------------

    saveButton.addEventListener('click', () => {

        const savedTask = taskName.value.trim();


        // -----------------------------
        // VALIDATION
        // -----------------------------

        if (savedTask.length < 3) {

            taskNameErr.textContent = 'Please enter a valid task name';

            return;
        }

        // Clear previous error
        taskNameErr.textContent = '';


        // -----------------------------
        // GET FORM VALUES
        // -----------------------------

        const savedTaskDes = task_des.value.trim();

        const savedStartDate = startDate.value;

        const savedPriority = priority.value;

        const savedReminder = reminder.value;


        console.log(`Your task is saved as ${savedTask}`);

        console.log(`Task description is: ${savedTaskDes}`);

        console.log(`Task starts on: ${savedStartDate}`);

        console.log(`Task priority is set to: ${savedPriority}`);

        console.log(`Your task reminder is set to: ${savedReminder}`);


        // -----------------------------
        // CREATE TASK CARD
        // -----------------------------

        const taskCard = document.createElement('div');

        taskCard.className = 'task-card';


        // -----------------------------
        // CHOOSE PRIORITY CONTAINER
        // -----------------------------

        if (savedPriority === 'High') {

            highPriority.appendChild(taskCard);

        } else if (savedPriority === 'Medium') {

            mediumPriority.appendChild(taskCard);

        } else {

            lowPriority.appendChild(taskCard);
        }


        // -----------------------------
        // TASK TITLE
        // -----------------------------

        const taskTitle = document.createElement('h4');

        taskTitle.className = 'task-title';

        taskTitle.textContent = savedTask;

        taskCard.appendChild(taskTitle);


        // -----------------------------
        // TASK DESCRIPTION
        // -----------------------------

        const taskDes = document.createElement('p');

        taskDes.className = 'task-description';

        taskDes.textContent = savedTaskDes;

        taskCard.appendChild(taskDes);


        // -----------------------------
        // START DATE
        // -----------------------------

        const dateStart = document.createElement('h6');

        dateStart.className = 'start';

        dateStart.textContent = savedStartDate;

        taskCard.appendChild(dateStart);


        // -----------------------------
        // PRIORITY
        // -----------------------------

        const priorityType = document.createElement('h6');

        priorityType.className = 'priority-type';

        priorityType.textContent = savedPriority;

        taskCard.appendChild(priorityType);


        // -----------------------------
        // REMINDER
        // -----------------------------

        const taskReminder = document.createElement('h6');

        taskReminder.className = 'task-reminder';

        taskReminder.textContent = savedReminder;

        taskCard.appendChild(taskReminder);

    });

});

console.log('JS FILE IS CONNECTED');
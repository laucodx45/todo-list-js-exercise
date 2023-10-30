function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  }
  return task;
};

function logTaskState(task) {
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

function completeTask(task) {
  task.complete = true;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨");
const task3 = [task1, task2];

console.log(task3);

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  }
  return task;
}

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed

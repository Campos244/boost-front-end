import { createSelectOptions, clearForm } from "./form.js"
import { submitTask, listTasks } from "./tasks.js"
import { PRIORITIES, CATEGORIES } from './constants.js'

createSelectOptions('priority', PRIORITIES)
createSelectOptions('category', CATEGORIES)

listTasks()

const taskForm = document.querySelector('#taskForm')
taskForm.addEventListener('submit', (e) => submitTask(e))

const clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', clearForm)
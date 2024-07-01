import { postTask, getTasks, deleteTask } from './api.js'
import { PRIORITIES } from './constants.js'

export function submitTask(e) {
  e.preventDefault()
  const title = document.querySelector('#title').value
  const priority = document.querySelector('#priority').value
  const description = document.querySelector('#description').value

  postTask(title, priority, description)
}

function createTask(id, title, priority, description) {
  const task = document.createElement('li')
  task.classList = 'taskList__task'
  task.id = id

  const priorityColor = `task__priority--${PRIORITIES[priority].value}`

  task.innerHTML = `
  <div class="task__info--column">
    <div class="task__info--row">
      <div class="task__priority ${priorityColor}">${PRIORITIES[priority].text}</div>
      <div class="task__category">+++++++++++++</div>
      <div class="task__date">++++++++++++++</div>
    </div>
    <div class="task__info--row">
      <div class="task__title">${title}</div>
      <div class="task__description">${description}</div>
    </div>
  </div>
  <div class="task__buttons">
    <button class="task__delete" type="button">
      <svg width="32" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_128)">
          <path
            d="M3.34131 6.33332H16.6746"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.34131 9.66665V14.6666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6746 9.66665V14.6666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.17456 6.33332L5.00789 16.3333C5.00789 16.7753 5.18349 17.1993 5.49605 17.5118C5.80861 17.8244 6.23253 18 6.67456 18H13.3412C13.7833 18 14.2072 17.8244 14.5197 17.5118C14.8323 17.1993 15.0079 16.7753 15.0079 16.3333L15.8412 6.33332"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.50793 6.33332V3.83332C7.50793 3.6123 7.59573 3.40034 7.75201 3.24406C7.90829 3.08778 8.12025 2.99998 8.34127 2.99998H11.6746C11.8956 2.99998 12.1076 3.08778 12.2639 3.24406C12.4201 3.40034 12.5079 3.6123 12.5079 3.83332V6.33332"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_128">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.00793457 0.499985)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  </div>
  `

  return task
}

export async function listTasks() {
  const taskList = document.getElementById('taskList')

  const tasks = await getTasks()

  const taskElement = (element) => createTask(element.id, element.title, element.priority, element.description)

  tasks.forEach((element) => taskList.appendChild(taskElement(element)))

  const deleteButtons = document.querySelectorAll('.task__delete')
  deleteButtons.forEach((button) =>
    button.addEventListener('click', (e) => {
      e.preventDefault()
      removeTask(button.parentElement.id)
    })
  )
}

export async function removeTask(id) {
  await deleteTask(id)

  const taskToDelete = document.getElementById(id)

  taskToDelete.remove()
}

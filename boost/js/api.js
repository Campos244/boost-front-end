export async function getTasks() {
  const response = await fetch('http://localhost:3000/tasks')
  const dbConverted = await response.json(response)
 
  return dbConverted
}

export async function postTask(title, priority, description) {
  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      priority: priority,
      description: description
    })
  })

  const responseConverted = await response.json()

  return responseConverted
}

//delecao fisica é a mais perigosa (se nao tiver backup)
//remover de forma a desativer 

export async function deleteTask(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE"
  })
}
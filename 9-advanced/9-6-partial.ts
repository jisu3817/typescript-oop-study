{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateToDo(toDo: ToDo, fieldToDo: Partial<ToDo>): ToDo {
    return { ...toDo, ...fieldToDo };
  }

  const toDo: ToDo = {
    title: 'today',
    description: 'deep sleep',
    label: 'today',
    priority: 'low',
  };

  console.log(updateToDo(toDo, { label: 'good' }));
}

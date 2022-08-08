import React, { useState } from 'react'
import CardTask from './CardTask'
import AddTask from './AddTask'

function Tasks() {
    const [tasks, setTasks] = useState([{ id: 1, description: 'doing my homeWork' },
    { id: 2, description: 'workingout ' }])
    const [task, setTask] = useState({ id: 20, description: '' })

    const onHandleDelete = (id) => {
        setTasks(tasks.filter((el) => el.id !== id))
    }

    return (

        <div>
            <AddTask task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} />
            <div style={{ display: 'flex', justifyContent: 'center ' }}>
                {tasks.map((el) => (
                    <CardTask key={el.id} el={el} onHandleDelete={onHandleDelete} setTasks={setTasks} tasks={tasks} />
                ))
                }
            </div>

        </div>
    )
}
export default Tasks

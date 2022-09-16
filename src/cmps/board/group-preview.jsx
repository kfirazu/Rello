import { useState } from 'react'
import { AddTaskForm } from './add-task-form'
import { TaskEditModal } from './task-edit-modal'
import { TaskList } from './task-list'

export const GroupPreview = ({ group }) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)

    const openEditModal = (ev) => {
        ev.stopPropagation()
        setIsEditModalOpen(true)
        document.addEventListener('click', closeEditModal)
    }

    const closeEditModal = () => {
        setIsEditModalOpen(false)
        document.removeEventListener('click', closeEditModal)
    }

    return (
        <div className='group-preview flex column'>
            <div className='group-title-container'>
                <div className='group-title'>
                    <h3>{group.title}</h3>
                </div>
                <button className='btn' onClick={openEditModal}>...</button>
            </div>
            {isEditModalOpen && <TaskEditModal setIsAddTaskOpen={setIsAddTaskOpen} />}
            {isAddTaskOpen && <AddTaskForm setIsAddTaskOpen={setIsAddTaskOpen} />}
            <TaskList tasks={group.tasks} />
        </div>
    )
}
import { TodoList } from "./todo-list"
import { TbCheckbox } from 'react-icons/tb'
import { IoCloseOutline } from 'react-icons/io5'
import { useState } from "react"

export const Checklist = ({ checklist, updateChecklists, removeChecklist }) => {

    let { title, todos } = checklist
    const [titleField, setTitleField] = useState(title)
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)

    const onBlur = (ev) => {
        if (!ev.relatedTarget) {
            setTitleField(title)
            console.log('Checklist title canceled!')
        }
        else if (ev.relatedTarget.className === 'checklist-title-save-btn') {
            updateChecklist('title', titleField)
            console.log('Checklist title saved!')
        }
        setFocused(false)
    }

    const handleTitleChange = ({ target }) => {
        setTitleField(target.value)
    }

    const updateChecklist = (name, value) => {
        checklist = { ...checklist, [name]: value }
        updateChecklists(checklist)
    }

    return (
        <div className="checklist">
            <div className="checklist-title">
                <span className="checklist-title-icon"><TbCheckbox /></span>

                <textarea className="checklist-title-textarea"
                    value={titleField}
                    onChange={handleTitleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                {!focused && <button className="delete-btn" onClick={() => removeChecklist(checklist.id)}>Delete</button>}

                {focused &&
                    <div className="checklist-title-buttons">
                        <button className="checklist-title-save-btn">Save</button>
                        <span><IoCloseOutline /></span>
                    </div>
                }
            </div>

            <TodoList todos={todos} updateChecklist={updateChecklist} />
        </div>
    )
}
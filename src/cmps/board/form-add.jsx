import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { setIsFormAddOpen, saveGroup, addTask } from '../../store/board/board.actions'

export const FormAdd = ({ groupId }) => {

    const formAdd = useSelector(state => state.systemModule.formAdd)
    const dispatch = useDispatch()
    const [form, handleChange] = useForm({ title: '' })

    useEffect(() => {
    }, [form])

    const onAddTask = (ev) => {
        ev.preventDefault()
        dispatch(addTask(groupId, form))
        closeForm()
    }

    const onAddGroup = (ev) => {
        ev.preventDefault()
        dispatch(saveGroup(form))
        closeForm()
    }

    const closeForm = () => {
        dispatch(setIsFormAddOpen(null, false))
    }

    return (
        <form className='form-add' onSubmit={formAdd.isAddGroup ? onAddGroup : onAddTask}>
            <div className='title'>
                <textarea
                    placeholder={formAdd.isAddGroup ? 'Enter list title...' : 'Enter a title for this card...'}
                    className={formAdd.isAddGroup ? 'group-title' : 'card-title'}
                    name='title' onChange={handleChange} on value={form.title} autoFocus>
                </textarea>
            </div>
            <button className='btn'>{formAdd.isAddGroup ? 'Add list' : 'Add card'}</button>
            <button onClick={closeForm}>X</button>
        </form >
    )
}



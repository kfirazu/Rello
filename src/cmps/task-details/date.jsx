import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { utilService } from "../../services/util.service"
import { setDynamicModal, updateTask } from "../../store/board/board.actions"
import { DynamicModal } from "../dynamic-modal/dynamic-modal"

export const Date = ({ dueDate }) => {

    const { ms, isDone } = dueDate
    const dynamicModal = useSelector(state => state.systemModule.dynamicModal)
    const params = useParams()
    const { groupId, taskId } = params
    const dispatch = useDispatch()

    const getFormatDate = (ms) => {
        const monthAndDay = utilService.formatMonthDay(ms)
        const time = utilService.formatAMPM(ms)
        return monthAndDay + ' at ' + time
    }

    const toggleModal = () => {
        if (dynamicModal.modalType === 'dates') {
            return dispatch(setDynamicModal({ modalType: null, fromCmp: null }))
        }
        dispatch(setDynamicModal({ modalType: 'dates', fromCmp: 'date' }))
    }

    const toggleIsDone = () => {
        dispatch(updateTask(groupId, taskId, 'dueDate', { ms, isDone: !isDone }))
    }

    const getDifference = () => {
        return ms - new window.Date().getTime()
    }

    return (
        <div className="date-container" >
            <h6>Due date</h6>
            <div className="date">
                <input type="checkbox" name="isDone" onChange={toggleIsDone} checked={isDone} />
                <button onClick={toggleModal}>
                    <span>{getFormatDate(ms)}</span>
                    {isDone ?
                        <span className="date-label" style={{ backgroundColor: '#61BD4F' }}>complete</span>
                        :
                        <div>
                            {Math.sign(getDifference()) === -1 &&
                                <span className="date-label" style={{ backgroundColor: 'red' }}>overdue</span>
                            }
                            {getDifference() < 86400000 && getDifference() > 0 &&
                                <span className="date-label" style={{ backgroundColor: '#F2D600', color: '#172B4D' }}>due soon</span>
                            }
                        </div>
                    }
                </button>
            </div>

            {dynamicModal.modalType === 'dates' && dynamicModal.fromCmp === 'date' &&
                <DynamicModal type='dates' groupId={groupId} taskId={taskId} closeModal={toggleModal} />
            }
        </div>
    )
}
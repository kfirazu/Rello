import { AttachmentModal } from "./attachment-modal"
import { ChecklistModal } from "./checklist-modal"
import { DatesModal } from "./dates-modal"
import { LabelsModal } from "./labels-modal"
import { MembersModal } from "./members-modal"

export const DynamicModal = ({ type, dynamicClassName, groupId, taskId, closeModal }) => {

    const component = () => {
        switch (type) {
            case 'members':
                return MembersModal
            case 'labels':
                return LabelsModal
            case 'checklist':
                return ChecklistModal
            case 'dates':
                return DatesModal
            case 'attachment':
                return AttachmentModal
            // case 'cover':
            //     return CoverModal
        }
    }

    return component()({
        dynamicClassName,
        groupId,
        taskId,
        closeModal
    })
}
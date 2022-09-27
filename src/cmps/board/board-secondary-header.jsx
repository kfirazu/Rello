import { boardService } from "../../services/board.service"

export const BoardSecondaryHeader = ({ board }) => {
    if (!board) return
    // const { members } = board

    const getAvatarPosition = (avatarIdx) => {
        return avatarIdx * (-3)
    }

    return (
        <header className='full board-layout board-secondary-header-container'>
            <div className='board-secondary-header'>
                <div className='header-main-content'>
                    <span className="board-title">{board.title}</span>
                    <button className='btn btn-transparent creator'>{board.createdBy ? board.createdBy.fullname : 'Guest'}</button>
                    <span className='divider'></span>
                    <span className="member-avatars">
                        {board.members && board.members.map((member, idx) => (
                            <img key={member.id} src={member.imgUrl}
                                alt="profile img" className='member-avatar'
                                style={{ transform: `translate(${getAvatarPosition(idx)}px)` }} />
                        )
                        )}
                    </span>
                </div>
            </div>
        </header>
    )
}
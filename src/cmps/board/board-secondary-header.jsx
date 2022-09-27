import { useState } from "react"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { boardService } from "../../services/board.service"
import { BoardSideMenu } from "./board-side-menu"

export const BoardSecondaryHeader = ({ board }) => {

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    if (!board) return
    // const { members } = board


    const getAvatarPosition = (avatarIdx) => {
        return avatarIdx * (-3)
    }

    const openBoardMenu = (isOpen) => {
        console.log('isSideMenuOpen:', isSideMenuOpen)
        //TODO: send true from btn and send is open to local state
        setIsSideMenuOpen(!isSideMenuOpen)
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
                            <img key={member.id} src={boardService.getMemberImgUrl(board, member.id)}
                                alt="profile img" className='member-avatar'
                                style={{ transform: `translate(${getAvatarPosition(idx)}px)` }} />
                        )
                        )}
                    </span>
                    <button className="btn-open-menu" onClick={() => openBoardMenu()}><HiOutlineDotsHorizontal className="board-menu-dots-icon" /> Show menu</button>
                    {isSideMenuOpen && <BoardSideMenu board={board} />}
                </div>
            </div>
        </header>
    )
}
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard, addBoard, updateBoard, removeBoard } from '../store/board/board.actions'
import { boardService } from '../services/board.service'
import { BoardHeader } from '../cmps/board/board-header'
import { GroupList } from '../cmps/board/group-list'
import { useParams } from 'react-router-dom'
// import { showSuccessMsg } from '../services/event-bus.service.js'

export const Board = () => {
    const board = useSelector(state => state.boardModule.board)
    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(loadBoard(params.boardId))
    }, [board])

    // const onRemoveBoard = (boardId) => {
    //     dispatch(removeBoard(boardId))
    // }
    // const onAddBoard = () => {
    //     const board = boardService.getEmptyBoard()
    //     board.vendor = prompt('Vendor?')
    //     addBoard(board)
    // }
    // const onUpdateBoard = (board) => {
    //     const price = +prompt('New price?')
    //     const boardToSave = { ...board, price }
    //     updateBoard(boardToSave)
    // }


console.log('board grouppssssss:', board.groups)
if(!board) return <div>Loading...</div>
    return (
        
        <div className='board'>
            <h3>Boards App</h3>
            <h1> hello from board b101</h1>
            <BoardHeader />
            <GroupList groups={board.groups} />


        </div>
    )
}


// function mapStateToProps(state) {
//     return {
//         boards: state.boardModule.boards
//     }
// }
// const mapDispatchToProps = {
//     loadBoard,
//     removeBoard,
//     addBoard,
//     updateBoard,
//     addToBoardt
// }


// export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
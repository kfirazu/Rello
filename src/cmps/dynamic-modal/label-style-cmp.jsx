import styled from 'styled-components'

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    cursor: pointer;
`

const BgColor = styled.div`
    position: absolute;
    height: 32px;
    border-radius: 3px;
    background-color: ${p => p.color};
    opacity: 0.3;

    &:hover {
        opacity: 0.5;
    }
`

const Color = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 8px;
    background-color: yellow;
    background-color: ${p => p.color};
`

const Title = styled.span`
    margin-left: 8px;
    color: #000;
`

const ColorPicker = styled.div`
    width: 48.8px;
    height: 28px;
    background-color: ${p => p.color};
    border-radius: 3px;
    opacity: 0.8;
    
    &:hover {
        opacity: 1;
    }
`

export const LabelStyleCmp = ({ className, color, title }) => {

    return (
        <LabelContainer onClick={(ev) => ev.stopPropagation()} className={className} variant={color} color={color}>
            {title && <>
                <BgColor className={className} color={color} />
                <Color color={color} />
                <Title>{title}</Title>
            </>}

            {!title && <ColorPicker className={className} color={color} />}
        </LabelContainer >
    )
}
import React from 'react'
import './index.css'

import CardComponent from '../Card/card'

export default function Content() {
    return (
        <div className='content'>
            <CardComponent
                title="Título do vídeo"
                description="Descrição do vídeo"
                thumbnail="https://placekeanu.com/345/194/y"
            />

            <CardComponent
                title="Título do vídeo"
                description="Descrição do vídeo"
                thumbnail="https://placekeanu.com/345/194/"
            />

            <CardComponent
                title="Título do vídeo"
                description="Descrição do vídeo"
                thumbnail="https://placekeanu.com/345/194/x"
            />
        </div>
    )
}
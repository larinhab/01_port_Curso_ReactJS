import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import React from 'react'
import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill/>,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>
}

function Thanks({data}) {
  return (
    <div className='thanks-container'>
        <h2>Está quase acabando...</h2>
        <p>Sua opinião é importante para nós, em breve você receberá um cupom de desconto!</p>
        
        <p>Para concluir sua avaliação clique no botão enviar abaixo!</p>
    
        <h3>Aqui está o resumo da sua avaliação: {data.name}</h3>
        <div className="review-data">
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </div>

        <div className="review-data">
          <span>Seu comentário:</span>
          {data.comment}
        </div>
    </div>
  )
}

export default Thanks
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs'
import './ReviewForm.css'
import React from 'react'


function ReviewForm({data, updateFieldHandler}) {
  return (
    <div className='review-form'>
        <div className='form-control score-container'>
          <label htmlFor="" className="radio-container">
            <input 
                type="radio" 
                name="review"  
                value="unsatisfied" 
                checked={data.review === "unsatisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required />
                <BsFillEmojiFrownFill/>
                <p>Insatisfeito</p>
          </label>

          <label htmlFor="" className="radio-container">
            <input 
                type="radio" 
                name="review"  
                value="neutral"
                checked={data.review === "neutral"}
                onChange={(e) => updateFieldHandler("review", e.target.value)} 
                required />
                <BsFillEmojiNeutralFill/>
                <p>Poderia ser melhor</p>
          </label>

          <label htmlFor="" className="radio-container">
            <input 
                type="radio" 
                name="review"  
                value="satisfied" 
                checked={data.review === "satisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required />
                <BsFillEmojiSmileFill/>
                <p>Satisfeito</p>
          </label>

          <label htmlFor="" className="radio-container">
            <input 
                type="radio" 
                name="review"  
                value="very satisfied" 
                checked={data.review === "very satisfied"}
                onChange={(e) => updateFieldHandler("review", e.target.value)}
                required />
                <BsFillEmojiHeartEyesFill/>
                <p>Muito Satisfeito</p>
          </label>
        </div>

        <div className="form-control">
          <label htmlFor="comment">Deixe seu comentário:
          
          <textarea 
              name="comment" 
              id="comment" 
              cols="45" 
              rows="10"
              value={data.comment || ""}
              onChange={(e) => updateFieldHandler("comment", e.target.value)} ></textarea>
          </label>
        </div>
    </div>
  )
}

export default ReviewForm
import { useState } from "react"
import minusIcon from "../images/icon-minus.svg"
import plusIcon from "../images/icon-plus.svg"
import { Button } from "./Button"

export function Upvote({ count }) {
  const [score, setScore] = useState(count)

  function upvote() {
    setScore(score => score + 1)
  }

  function downvote() {
    setScore(score => score - 1)
  }

  return (
    <div className="upvote-container">
      <Button type="upvote" icon={plusIcon} onClick={upvote} />
      <span className="vote-count">{score}</span>
      <Button type="downvote" icon={minusIcon} onClick={downvote} />
    </div>
  )
}

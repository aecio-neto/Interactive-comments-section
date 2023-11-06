import { useState } from "react"
import { Button } from "./Button"
import { UserInfo } from "./UserInfo"
import { TextArea } from "./TextArea"

export function AddCommentForm({
  currentUser,
  onSubmit,
  parentCommentId = null,
  replyingToUsername = null,
}) {
  const initialText = ""
  const [text, setText] = useState(initialText)

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(text, parentCommentId)
    setText(initialText)
  }

  return (
    <form className="add-comment" onSubmit={handleSubmit}>
      <UserInfo avatar={currentUser?.image?.png || currentUser?.image?.webp} />
      <TextArea
        placeholder="Escreva seu comentário..."
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <Button type="comment" label="Enviar" />
    </form>
  )
}

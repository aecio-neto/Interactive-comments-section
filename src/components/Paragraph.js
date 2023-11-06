export function Paragraph({ text, replyingTo }) {
  return (
    <p className="paragraph">
      {replyingTo && (
        <span className="mentioned-username">@{replyingTo}: </span>
      )}
      {text}
    </p>
  )
}

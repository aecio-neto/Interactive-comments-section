import { CommentOrReply } from "./CommentOrReply"

export function Replies({ comment, timeSince, currentUser, addContent }) {
  return (
    <div className="replies">
      {(comment.replies || []).map(reply => (
        <CommentOrReply
          key={reply.id}
          comment={reply}
          timeSince={timeSince}
          currentUser={currentUser}
          addContent={addContent}
        />
      ))}
    </div>
  )
}

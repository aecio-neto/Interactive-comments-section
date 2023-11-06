import { Replies } from "./Replies"
import { CommentContent } from "./CommentContent"

export function CommentOrReply({
  comment,
  timeSince,
  currentUser,
  addContent,
}) {
  return (
    <div className="comment-container">
      <CommentContent
        comment={comment}
        timeSince={timeSince}
        currentUser={currentUser}
        addContent={addContent}
      />
      {comment.replies && comment.replies?.length > 0 ? (
        <Replies
          comment={comment}
          timeSince={timeSince}
          currentUser={currentUser}
          addContent={addContent}
        />
      ) : null}
    </div>
  )
}

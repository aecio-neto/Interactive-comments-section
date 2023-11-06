import { useState } from "react"
import replyIcon from "../images/icon-reply.svg"
import { Button } from "./Button"
import { Upvote } from "./Upvote"
import { UserInfo } from "./UserInfo"
import { Paragraph } from "./Paragraph"
import { AddCommentForm } from "./AddCommentForm"

export function CommentContent({
  comment,
  timeSince,
  currentUser,
  addContent,
}) {
  const [showReplyForm, setShowReplyForm] = useState(false)

  return (
    <div className="comment">
      <UserInfo
        username={comment.user.username}
        timeAgo={timeSince(comment.createdAt)}
        avatar={comment.user.image.png}
      />
      <Paragraph text={comment.content} replyingTo={comment.replyingTo} />
      <Upvote count={comment.score} />
      {!showReplyForm && (
        <Button
          type="reply"
          icon={replyIcon}
          label="Reply"
          onClick={() => setShowReplyForm(!showReplyForm)}
        />
      )}

      {showReplyForm && (
        <AddCommentForm
          currentUser={currentUser}
          onSubmit={(text, parentCommentId) => {
            addContent(text, parentCommentId, comment.user.username)
            setShowReplyForm(false)
          }}
          parentCommentId={comment.id}
          replyingToUsername={comment.user.username}
        />
      )}
    </div>
  )
}

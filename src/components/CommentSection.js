import { useState } from "react"
import usersData from "../data.json"
import { CommentOrReply } from "./CommentOrReply"
import { AddCommentForm } from "./AddCommentForm"

export function CommentSection() {
  const [commentsList, setCommentsList] = useState(usersData.comments)
  const [currentUser, setCurrentUser] = useState(usersData.currentUser)

  function addContent(
    newContent,
    parentCommentId = null,
    replyingToUsername = null
  ) {
    const newId = new Date().getTime()

    const contentObj = {
      id: newId,
      content: newContent,
      createdAt: new Date(),
      score: 0,
      replyingTo: replyingToUsername,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    }

    setCommentsList(prevComments => {
      const findAndAddReply = comments => {
        return comments.map(comment => {
          if (comment.id === parentCommentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), contentObj],
            }
          }
          if (Array.isArray(comment.replies)) {
            // Verifique se comment.replies é um array
            return { ...comment, replies: findAndAddReply(comment.replies) }
          }
          return comment
        })
      }

      if (parentCommentId === null) {
        return [...prevComments, contentObj]
      } else {
        return findAndAddReply(prevComments)
      }
    })
  }

  function timeSince(dateString) {
    const date = new Date(dateString)

    if (isNaN(date.getTime())) {
      return dateString
    }

    const now = new Date()
    const secondsPast = (now.getTime() - date.getTime()) / 1000

    if (secondsPast < 604800) {
      const daysPast = Math.floor(secondsPast / 86400)
      return daysPast === 0 ? "Hoje" : daysPast + " dias atrás"
    } else {
      const weeksPast = Math.floor(secondsPast / 604800)
      return `${weeksPast} ${weeksPast > 1 ? "semanas" : "semana"} atrás`
    }
  }

  return (
    <main className="container">
      {commentsList.map(comment => (
        <CommentOrReply
          key={comment.id}
          comment={comment}
          timeSince={timeSince}
          currentUser={currentUser}
          addContent={addContent}
        />
      ))}
      <AddCommentForm currentUser={currentUser} onSubmit={addContent} />
    </main>
  )
}

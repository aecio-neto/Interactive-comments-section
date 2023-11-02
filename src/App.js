import { useState } from "react"
import replyIcon from "./images/icon-reply.svg"
import minusIcon from "./images/icon-minus.svg"
import plusIcon from "./images/icon-plus.svg"
import "./App.css"

const usersData = {
  currentUser: {
    image: {
      png: "./images/avatars/image-juliusomo.png",
      webp: "./images/avatars/image-juliusomo.webp",
    },
    username: "andredev",
  },
  comments: [
    {
      id: 1,
      content:
        "Impressionante! Embora pareça que a funcionalidade de arrastar poderia ser aprimorada. Mas no geral, parece incrível. Você acertou no design e a responsividade em vários pontos de interrupção funciona muito bem.",
      createdAt: new Date(),
      score: 12,
      user: {
        image: {
          png: "./images/avatars/image-amyrobson.png",
          webp: "./images/avatars/image-amyrobson.webp",
        },
        username: "juliadeva",
      },
      replies: [],
    },
    {
      id: 2,
      content:
        "Seu projeto parece incrível! Há quanto tempo você está programando? Eu ainda sou novo nisso, mas estou pensando em mergulhar no React em breve. Talvez você possa me dar uma ideia de onde posso aprender React? Obrigado!",
      createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
      score: 5,
      user: {
        image: {
          png: "./images/avatars/image-maxblagun.png",
          webp: "./images/avatars/image-maxblagun.webp",
        },
        username: "jordaodev",
      },
      replies: [
        {
          id: 3,
          content:
            "Se você ainda está aprendendo, eu recomendaria focar nos fundamentos de HTML, CSS e JS antes de considerar o React. É muito tentador pular adiante, mas estabeleça uma base sólida primeiro.",
          createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
          score: 4,
          replyingTo: "jordaodev",
          user: {
            image: {
              png: "./images/avatars/image-ramsesmiron.png",
              webp: "./images/avatars/image-ramsesmiron.webp",
            },
            username: "ramondev",
          },
        },
        {
          id: 4,
          content:
            "Não poderia concordar mais com isso. Tudo se move tão rápido e sempre parece que todos conhecem a mais nova biblioteca/framework. Mas os fundamentos são o que permanece constante.",
          createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
          score: 2,
          replyingTo: "jordaodev",
          user: {
            image: {
              png: "./images/avatars/image-juliusomo.png",
              webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "rodrigopnc",
          },
        },
      ],
    },
  ],
}

export default function App() {
  return <CommentSection />
}

function CommentSection() {
  const [commentsList, setCommentsList] = useState(usersData.comments)
  const [currentUser, setCurrentUser] = useState(usersData.currentUser)

  function addContent(newContent, parentCommentId = null, replyingToUsername = null) {
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
      const findAndAddReply = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentCommentId) {
            return { ...comment, replies: [...(comment.replies || []), contentObj] };
          }
          if (Array.isArray(comment.replies)) {  // Verifique se comment.replies é um array
            return { ...comment, replies: findAndAddReply(comment.replies) };
          }
          return comment;
        });
      };
  
      if (parentCommentId === null) {
        return [...prevComments, contentObj];
      } else {
        return findAndAddReply(prevComments);
      }
    });
  }
  

  function timeSince(date) {
    date = new Date(date)
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

function AddCommentForm({
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

function CommentOrReply({ comment, timeSince, currentUser, addContent }) {
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

function CommentContent({ comment, timeSince, currentUser, addContent }) {
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
      {!showReplyForm && <Button
        type="reply"
        icon={replyIcon}
        label="Reply"
        onClick={() => setShowReplyForm(!showReplyForm)}
      />}

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

function Replies({ comment, timeSince, currentUser, addContent }) {
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

function UserInfo({ username, timeAgo, avatar }) {
  return (
    <div className="user-info">
      <img src={avatar} alt="" />
      <strong>
        <p>{username}</p>
      </strong>
      <p>{timeAgo}</p>
    </div>
  )
}

function Button({ type, icon, label, onClick }) {
  const className = `${type}-button`
  return (
    <button className={className} onClick={onClick}>
      {icon && type === "reply" ? (
        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            className="icon-path"
            fill="#5357B6"
          />
        </svg>
      ) : icon ? (
        <img src={icon} alt={type} />
      ) : null}
      <strong> {label}</strong>
    </button>
  )
}

function Upvote({ count }) {
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

function Paragraph({ text, replyingTo }) {
  return (
    <p className="paragraph">
      {replyingTo && <span className="mentioned-username">@{replyingTo}: </span>}
      {text}
    </p>
  );
}

function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="comment-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  )
}

export function TextArea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="comment-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  )
}

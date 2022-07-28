import { useState } from "react"

export default function Create() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')


  return (
    <div className="create">
        <h2>Add a a new blog</h2>
        <form>
          <label>Blog title:</label>
          <input 
            placeholder="Your title"
            type="text"
            required
            value={ title }
            onChange={ (e) => setTitle(e.target.value) }
             />

          <label>Blog body:</label>
          <textarea
          placeholder="Your text"
          required
          value={ body }
          onChange={ (e) => setBody(e.target.value) }
          >
          </textarea>

          <label>Blog author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          <button>Add blog</button>
          <p>
            {title} / { body }
          </p>
        </form>
    </div>
  )
}

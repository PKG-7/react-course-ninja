export default function Create() {
  return (
    <div className="create">
        <h2>Add a a new blog</h2>
        <form>
          <label>Blog title:</label>
          <input 
            placeholder="Your title"
            type="text"
            required
             />

          <label>Blog body:</label>
          <textarea
          placeholder="Your text"
          required>
          </textarea>

          <label>Blog author:</label>
          <select>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>

          <button>Add blog</button>
        </form>
    </div>
  )
}

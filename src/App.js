import { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Toggleble from './components/Toggleble'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [status, setStatus] = useState('')
  const blogFormRef = useRef()

  useEffect(() => {
    blogService
      .getAll()
      .then((blogs) =>
        setBlogs(blogs.sort((a, b) => b.likes.length - a.likes.length))
      )
  }, [])

  useEffect(() => {
    const loggedInUserTokenJSON =
      window.localStorage.getItem('loggedInUserToken')

    if (loggedInUserTokenJSON) {
      const user = JSON.parse(loggedInUserTokenJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const user = await loginService.login({ username, password })
      window.localStorage.setItem('loggedInUserToken', JSON.stringify(user))
      blogService.setToken(user.token)
      setUser(user)
    } catch (error) {
      setStatus('error')
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setStatus('')
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUserToken')
    setUser(null)
  }

  const handleCreate = (blogObject) => {
    blogService.create(blogObject).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog))
      setStatus('success')
      setErrorMessage(
        `a new blog ${returnedBlog.title} by ${returnedBlog.author} added`
      )

      setTimeout(() => {
        setStatus('')
        setErrorMessage(null)
      }, 5000)
    })

    blogFormRef.current.toggleVisibility()
  }

  if (user === null) {
    return (
      <div>
        <h1>login to application</h1>
        <Notification message={errorMessage} status={status} />
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={errorMessage} status={status} />
      <p>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
      </p>
      <Toggleble buttonLabel="new blog" ref={blogFormRef}>
        <BlogForm createBlog={handleCreate} />
      </Toggleble>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          user={user}
          blog={blog}
          blogs={blogs}
          setBlogs={setBlogs}
        />
      ))}
    </div>
  )
}

export default App

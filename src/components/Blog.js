import { useState } from 'react'
import blogService from '../services/blogs'

const Blog = ({ user, blog, blogs, setBlogs }) => {
  const { id, likes, author, title, url } = blog
  const [visible, setVisible] = useState(false)
  const [isLiked, setIsLiked] = useState(
    likes.find((username) => (username === user.username ? true : false))
  )

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const likedBtnStyle = {
    background: 'blue'
  }

  const handleLike = () => {
    const updatedBlog = {
      title,
      author,
      url,
      likes
    }

    if (!isLiked) {
      updatedBlog.likes.push(user.username)
      setIsLiked(!isLiked)
    } else {
      const indexOfCurrentUser = updatedBlog.likes.indexOf(user.username)
      updatedBlog.likes.splice(indexOfCurrentUser, 1)
      setIsLiked(!isLiked)
    }

    blogService.update(id, updatedBlog).then((returnedBlog) => {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === returnedBlog.id ? returnedBlog : blog
      )
      setBlogs(updatedBlogs)
    })
  }

  const handleRemove = () => {
    if (window.confirm(`Remove blog ${title} by ${author}`)) {
      blogService.deleteBlog(id).then((response) => {
        if (response.status === 204) {
          setBlogs(blogs.filter((blog) => blog.id !== id))
        }
      })
    }
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {title} <button onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible}>
        <div>
          {title}
          <button onClick={toggleVisibility}>hide</button>
        </div>
        <div>{url}</div>
        <div>
          likes {likes.length}{' '}
          <button style={isLiked ? likedBtnStyle : null} onClick={handleLike}>
            like
          </button>
        </div>
        <div>{author}</div>
        <button onClick={handleRemove}>remove</button>
      </div>
    </div>
  )
}

export default Blog

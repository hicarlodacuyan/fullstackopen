const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((accumulator, currentValue) => 
        accumulator + currentValue.likes, 
        0
    )
}

const favoriteBlog = (blogs) => {
    return blogs.reduce((accumulator, currentValue) => {
        return accumulator.likes === undefined 
            || accumulator.likes < currentValue.likes 
            ? currentValue 
            : accumulator
    }, {})
}

const mostBlogs = (blogs) => {
    const blogCount = {}

    blogs.forEach((blog) => {
        if (!blogCount[blog.author]) {
            blogCount[blog.author] = 1
        } else {
            blogCount[blog.author]++
        }
    })

    let topAuthor = ""
    let topCount = 0
    
    for (const author in blogCount) {
        if (blogCount[author] > topCount) {
            topAuthor = author
            topCount = blogCount[author]
        }
    }

    return { author: topAuthor, blogs: topCount }
}

const mostLikes = (blogs) => {
    const likeCount = {}

    blogs.forEach((blog) => {
        if (!likeCount[blog.author]) {
            likeCount[blog.author] = blog.likes
        } else {
            likeCount[blog.author] += blog.likes
        }
    })

    let topAuthor = ""
    let topCount = 0
    
    for (const author in likeCount) {
        if (likeCount[author] > topCount) {
            topAuthor = author
            topCount = likeCount[author]
        }
    }

    return { author: topAuthor, likes: topCount }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}
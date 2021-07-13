import React, { useState, useEffect } from 'react';

import './CreateBlog.css';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('you');
    const [success, setSuccess] = useState(null);
    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author};
        setIsPending(prevPending => prevPending = true);
        setTimeout(() => {
            
    
            fetch('http://localhost:8080/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            })
            .then(() => {
                setTitle(prevTitle => prevTitle = '')
                setBody(prevBody => prevBody = '')
                setAuthor(prevAuthor => prevAuthor = '')
                setSuccess(prevSuccess => 'yay, new blog added')
                setIsPending(prevPending => (prevPending = false));
                setTimeout(() => {
                    setSuccess(prevSuccess => null);
                }, 1000);
            })
        }, 2000);
    }

    return (
			<article className="CreateBlog">
				{isPending ? (
					<div>
						<h2>Loading</h2>
					</div>
				) :
				success ? (
					<div>
						<h2>{success}</h2>
					</div>
				) : (
					<h2>Add a new post</h2>
				)}
				<form onSubmit={handleSubmit} action="">
					<label>Title : </label>
					<input
						type="text"
						required
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<label>Body : </label>
					<textarea
						required
						value={body}
						onChange={e => setBody(e.target.value)}
					></textarea>
					<label>Author : </label>
					<select value={author} onChange={e => setAuthor(e.target.value)}>
						<option value="you">you</option>
						<option value="me">me</option>
					</select>
					<button>Add Post</button>
				</form>
			</article>
		);
}
 
export default CreateBlog;
function validateBlog(req, res, next) {
	const { title, authorId, content } = req.body;
	if (!title || !authorId || !content) {
		return res.status(400).json({
			status: "error",
			message: "Title, authorId, and content are required",
		});
	}
	// Validate that authorId is a number
	if (isNaN(parseInt(authorId))) {
		return res.status(400).json({
			status: "error",
			message: "authorId must be a valid number",
		});
	}
	next();
}
module.exports = validateBlog; // biar bisa di import di file lain

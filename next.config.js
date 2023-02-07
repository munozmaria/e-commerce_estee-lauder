
const withVideos = require("next-videos")

module.exports = withVideos({
	distDir: "build",
	images: {
		domains: ["res.cloudinary.com"],
	},
})



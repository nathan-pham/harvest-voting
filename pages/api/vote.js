const voteAPI = (req, res) => {
    if(req.method == "POST") {
        res.send(200).json({ success: true })
    } else {
        res.status(405).json({ success: false, message: "method not allowed" })
    }
}

export default voteAPI
const voteAPI = (req, res) => {
    if(req.method == "POST") {
        res.status(200).json({ success: true, payload: req.body })
    } else {
        res.status(405).json({ success: false, message: "method not allowed" })
    }
}

export default voteAPI
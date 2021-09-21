import { Deta } from "deta"

const deta = Deta(`${ process.env.DETA_PROJECT_KEY }`)
const db = deta.Base("votes")

const voteAPI = async (req, res) => {
    if(req.method == "POST") {
        await db.put(req.body)
        res.status(200).json({ success: true, payload: req.body })
    } else {
        res.status(405).json({ success: false, message: "method not allowed" })
    }
}

export default voteAPI
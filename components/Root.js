import { useEffect } from "react"
import Head from "next/head"

const Root = ({ title, children }) => {
    useEffect(() => {
        document.body.style.background = "#fffff7"
    }, [])

    return (
        <>
            <Head>
                <title>Harvest Festival</title>
            </Head>

            { children }
        </>
    )
}

export default Root
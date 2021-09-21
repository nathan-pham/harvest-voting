import { useEffect } from "react"
import Head from "next/head"

import PageTransition from "./Transition/Page"
import ContentTransition from "./Transition/Content"

const Root = ({ title, children }) => {
    useEffect(() => {
        document.body.style.background = "#ffffe6"
    }, [])

    return (
        <>
            <Head>
                <title>Harvest Festival</title>
            </Head>

            <PageTransition />
            <ContentTransition>
                { children }
            </ContentTransition>
        </>
    )
}

export default Root
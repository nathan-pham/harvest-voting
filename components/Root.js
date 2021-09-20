import Head from "next/head"

const Root = ({ title, children }) => (
    <>
        <Head>
            <title>Harvest Festival</title>
        </Head>

        { children }
    </>
)

export default Root
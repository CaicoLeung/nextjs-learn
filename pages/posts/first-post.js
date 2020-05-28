import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/_layout'
import { getJsonData } from '../../lib/post'

export default function FirstPost({ list }) {
    return (
        <Layout>
            <Head>
                <title>Caico</title>
            </Head>
            <h1>这是SSG()预渲染页面</h1>
            <Link href='/'>back to home</Link>
            <ul>
                {
                    list.map(item => (
                        <li key={item.id}>
                            <p>{ item.title }</p>
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export async function getStaticProps () {
    const list = await getJsonData()
    return {
        props: {
            list
        }
    }
}

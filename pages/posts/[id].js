import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/post'
import Layout from '../../components/_layout'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function DynamicRoute ({ res }) {
    return (
        <Layout>
            <Head>
                <title>{ res.title }</title>
            </Head>
            <h1 className={utilStyles.headingXl}>
                { res.title }
            </h1>
            <div className={utilStyles.lightText}>
                <Date dateString={res.date}/>
            </div>
            <div dangerouslySetInnerHTML={{__html: res.contentHtml}}/>
        </Layout>
    )
}

export async function getStaticPaths () {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps ({ params }) {
    const res = await getPostData(params.id)
    return {
        props: { res }
    }
}

import fetch from "node-fetch";
import Layout from "../../components/_layout";

export default function ServerRender ({ data }) {
    return (
        <Layout>
            <h1>这是SSR(服务端渲染)的页面</h1>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{ item.title }</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export async function getServerSideProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await res.json()
    return {
        props: { data }
    }
}

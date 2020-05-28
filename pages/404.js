import Head from 'next/head'
import styled from 'styled-components'

const Center = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  line-height: 100vh;
`

export default function Custom404 () {
    return (
        <Center>
            <Head>
                <title>404 Not Found</title>
            </Head>
            <h2>这是自定义Page 404页面</h2>
        </Center>
    )
}

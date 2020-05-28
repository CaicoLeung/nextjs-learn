import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  height: 56px;
  line-height: 56px;
  background: darkslategray;
  color: #fff;
  font-size: 18px;
  text-align: center;
`

const CommonHeader = () => {
    return (
        <Head>
            公共头部
        </Head>
    )
}

export default CommonHeader

import Head from 'next/head'
import AuthLayout from '../components/common/authLayout'
import Explore from '../components/pages/Explore'

export default function Index() {
  return (
    <>
      <Head>
        <title>Explore Images</title>
        <meta name='description' content='Explore Images' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AuthLayout children={<Explore />} />
    </>
  )
}

import Layout from '@/components/Layout'

export default function Home() {
    return (
        <Layout title="Home">
            {/* text-4xl: テキストを36pxにする */}
            {/* ここより下がLayout.tsxにある、childrenとして送られる */}
            <p className="text-4xl">Welcome to Next.js</p>
        </Layout>
    )
}

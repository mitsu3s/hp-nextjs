import Layout from '@/components/Layout'

// 上下どちらを使ってもよし

// 普通の関数を使うとき
// /(最初の画面)の内容
// export default function Home() {
//     return (
//         <Layout title="Home">
//             {/* text-4xl: テキストを36pxにする */}
//             {/* ここより下がLayout.tsxにある、childrenとして送られる */}
//             <p className="text-4xl">Welcome to Next.js</p>
//         </Layout>
//     )
// }

// アロー関数を使う時
// /(最初の画面)の内容
const Home = () => {
    return (
        <Layout title="Home">
            {/* text-4xl: テキストを36pxにする */}
            {/* ここより下がLayout.tsxにある、childrenとして送られる */}
            <p className="text-4xl">Welcome to Next.js</p>
        </Layout>
    )
}

export default Home

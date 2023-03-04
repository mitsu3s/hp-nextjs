// Next.jsフレームワークでページの<head>を設定するのため
import Head from 'next/head'
// Next.jsでクライアントサイドのルーティングを実現するため
import Link from 'next/link'
// Next.jsで画像を最適化して表示するため
import Image from 'next/image'

// TypeScriptによる型安全性を満たすために使う
// 今回だとchildrenに<div></div>などのNodeが来るため必要となる
import { ReactNode } from 'react'

// Layoutを使う時に渡されるpropsの型を定義
interface LayoutProps {
    children: ReactNode
    title: string
}

export const Layout = ({ children, title = 'HP by Next.js' }: LayoutProps) => {
    //: LayoutPropsで型を指定
    return (
        // Tailwindcssに関してはチートシート参照
        // 1rem = 16px

        // min-h-screen: 最小の高さをウィンドウのサイズと同じにする
        // flex: 横並びにする
        // flex-col: 横並びにしたものを再度垂直に(縦に)する
        // justify-center: 並べたものを縦軸方向で中央揃いにする
        // items-center: 並べたものを横軸方向で中央揃いにする
        // text-gray-600: テキストの色を、グレーの600番にする
        // text-sm: テキストのサイズを、小さめのものにする
        // font-mono: テキストのフォントを、モノスペースフォントにする
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                {/* bg-gray-800: 背景色を、グレーの800番にする */}
                {/* w-screen: 横幅をウィンドウサイズにする */}
                <nav className="bg-gray-800 w-screen">
                    {/* pl-8: padding-left: 2rem; */}
                    {/* h-14: height: 3.5rem; */}
                    <div className="flex items-center pl-8 h-14">
                        {/* space-x-4: 要素間のスペース */}
                        <div className="flex space-x-4">
                            <Link href="/" legacyBehavior>
                                {/* hover: ホバーした時の動作 */}
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Home
                                </a>
                            </Link>
                            <Link href="/blog-page" legacyBehavior>
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/contact-page" legacyBehavior>
                                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            {/* w-full: 親要素の幅100％になるようにする */}
            {/* border-t: 要素の上にボーダーを追加 */}
            <footer className="w-full h-12 flex justify-center items-center border-t">
                {/* prettier-ignore */}
                <a
                    className="flex items-center"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </a>
            </footer>
        </div>
    )
}

export default Layout

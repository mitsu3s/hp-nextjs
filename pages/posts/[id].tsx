import Link from 'next/link'
import Layout from '@/components/Layout'
import { getAllPostsIds, getPostData } from '@/lib/posts'

// Postを使う時に渡されるpropsの型を定義
interface PostProps {
    post: {
        userId: string
        id: number
        title: string
        body: string
    }
}

// blog-pageのそれぞれから遷移するページ
const Post = ({ post }: PostProps) => {
    if (!post) {
        return <div>Loading...</div>
    }

    return (
        <Layout title={post.title}>
            <p className="m-4">
                {'ID : '}
                {post.id}
            </p>
            <p className="mb-8 text-xl font-bold">{post.title}</p>
            <p className="px-10">{post.body}</p>

            <Link href="/blog-page">
                <div className="flex cursor-pointer mt-12">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mr-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                        />
                    </svg>
                    <span>Back to blog-page</span>
                </div>
            </Link>
        </Layout>
    )
}

export default Post

export async function getStaticPaths() {
    // ビルド時にAPIにアクセスして、必要となるIDを取得
    const paths = await getAllPostsIds()

    return {
        paths,
        fallback: false,
    }
}

// ちなみに、getStaticPropsの仕様で、"props: {}に指定した値がpageコンポーネント(今回でのPost)のpropsに渡される"となっている
export async function getStaticProps({ params }: any) {
    // params.idでposts.ts内の関数よりデータを取得
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        },
    }
}

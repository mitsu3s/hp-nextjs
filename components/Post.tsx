// blog-page(100件表示されているとこ)のレイアウト

import Link from 'next/link'

// Postを使う時に渡されるpropsの型を定義
interface PostProps {
    post: {
        userId: string
        id: number
        title: string
        body: string
    }
}

export const Post = ({ post }: PostProps) => {
    return (
        <div>
            <span>{post.id}</span>
            {' : '}
            {/* cursor-pointer: 乗せた時にカーソルが出るようにする */}
            {/* border-b: 要素の下にボーダーを追加する */}
            <Link href={`/posts/${post.id}`}>
                <span className=" cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
                    {post.title}
                </span>{' '}
            </Link>
        </div>
    )
}

export default Post

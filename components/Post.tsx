// Postを使う時に渡されるpropsの型を定義
interface PostProps {
    post: {
        id: number
        title: string
    }
}

export const Post = ({ post }: PostProps) => {
    return (
        <div>
            <span>{post.id}</span>
            {' : '}
            {/* cursor-pointer: 乗せた時にカーソルが出るようにする */}
            {/* border-b: 要素の下にボーダーを追加する */}
            <span className=" cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-500">
                {post.title}
            </span>
        </div>
    )
}

export default Post

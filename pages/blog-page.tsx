import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getAllPostsData } from '@/lib/posts'

interface BlogProps {
    posts: {
        userId: string
        id: number
        title: string
        body: string
    }[] // postsを持つ配列と示している
}

// /blog-pageの内容
const Blog = ({ posts }: BlogProps) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post}></Post>)}
            </ul>
        </Layout>
    )
}

export default Blog

// サーバーサイドでビルド時に一回だけ実行される
// ちなみに、getStaticPropsの仕様で、"props: {}に指定した値がpageコンポーネント(今回でのBlog)のpropsに渡される"となっている
export async function getStaticProps() {
    const posts = await getAllPostsData()
    return { props: { posts } }
}

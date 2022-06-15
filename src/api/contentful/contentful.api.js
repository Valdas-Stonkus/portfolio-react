import { ContentfulResponseMapper } from './contenful.mappper'
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../../constants/contentful.api'

const contentful = require('contentful')

class PostsApi {
    constructor() {
        this.mapper = new ContentfulResponseMapper()
        this.client = contentful.createClient({
            space: CONTENTFUL_SPACE_ID,
            accessToken: CONTENTFUL_ACCESS_TOKEN
        })
    }

    getPosts = async () => {
        const postsResponse = await this.client.getEntry('7ygbRyPaHM2bdGQDeny0Nf')
        return this.mapper.postsResponseToPostList(postsResponse)
    }
}

export default PostsApi

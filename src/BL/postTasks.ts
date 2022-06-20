import { getAll } from "../DL/controllers/postController"
import { PostInterface } from "../DL/models/postModel"

export const get = async (): Promise<PostInterface[] | PostInterface> => await getAll()
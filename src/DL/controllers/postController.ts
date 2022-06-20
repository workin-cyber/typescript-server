import postModel, { PostInterface } from "../models/postModel";

export const getAll = async (): Promise<PostInterface[]> => await postModel.find()

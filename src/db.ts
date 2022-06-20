import { connect } from "mongoose"

const connectDb = async (): Promise<void> => {
    try {
        await connect(process.env.CONNECTION_STRING as string)
        console.log("db is connected");
    } catch (error: any) {
        console.log(error.message || error);
    }
}

export default connectDb
import { connectToDB } from "@utils/database";
import Prompt from "@modules/prompt";


export const GET = async(req)=>{
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts,{status:200}))
    } catch (error) {
        return new Response("failed to fetch data",{status:500})

    }
}
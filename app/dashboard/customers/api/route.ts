// import { Configuration, OpenAIApi } from 'openai-edge'
// import { OpenAIStream, StreamingTextResponse } from 'ai'
 
// export const runtime = 'edge'
 
// const apiConfig = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY!,
// })
 
// const openai = new OpenAIApi(apiConfig)
 
// export async function POST(req: Request) {

//   const res = await req.json()
//   return Response.json({ res })

//   // Extract the `messages` from the body of the request


//   // const data = JSON.parse(req.body);

  
//   // console.log('www',data)
  
//   return Response.json([2122])
//   // Request the OpenAI API for the response based on the prompt
//   const response = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     stream: true,
//     messages: '你哈皮',
//     max_tokens: 500,
//     temperature: 0.7,
//     top_p: 1,
//     frequency_penalty: 1,
//     presence_penalty: 1,
//   })
 
//   // Convert the response into a friendly text-stream
//   const stream = OpenAIStream(response)
 
//   // Respond with the stream
//   return new StreamingTextResponse(stream)
// }

export async function GET(request: Request) {
  const res = await request.json()
  return Response.json({ res })
}
import OpenAI from "openai";

const KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI(
    {apiKey: KEY, dangerouslyAllowBrowser: true}
);

  

async function openAI(messages: any): Promise<Message> {
  const completion: ResponseOpenAI = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  //console.log(completion);
  return {
    role: completion.choices[0].message.role,
    content: completion.choices[0].message.content,
  };
}

export default openAI;
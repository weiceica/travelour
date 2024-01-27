import OpenAI from 'openai'

const openai = new OpenAI(
    {apiKey: process.env['OPENAI_API_KEY']},
);

const query = async(prompt:string, chatId:string, model:string) => {
    // build my prompt up using contextual chat later...
    
    model = "gpt-4";
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-4',
            temperature: 0.7,
            max_tokens: 400
        });

        return response.choices[0].message.content;
    } catch (error) {
        const e = error as Error;
        console.error(`Error: ${e.message}`);
        return `Travelour has yet to provide this functionality. (Error: ${e.message})`;
    }
};

export default query;
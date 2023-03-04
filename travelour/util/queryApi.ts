import openai from "./chatgpt";

const query = async(prompt:string, chatId:string, model:string) => {
    // build my prompt up using contextual chat later...

    model = "text-davinci-003";
    const res = await openai.createCompletion({
        model, prompt, max_tokens: 1000, temperature: 1.0, top_p: 1,
    }).then(resp => resp.data.choices[0].text).catch(
        (e) => 
            `Travelour has yet to provide this functionality. (Error: ${e.message})`
    );
    return res;
};

export default query;
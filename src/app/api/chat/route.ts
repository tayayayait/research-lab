import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!messages) {
            return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.error('OPENAI_API_KEY is missing');
            return NextResponse.json({ error: 'OpenAI API Key is not configured' }, { status: 500 });
        }

        const openai = new OpenAI({ apiKey });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: `당신은 'AI Research Lab'의 전문 연구 어시스턴트입니다. 
            방문자의 질문에 친절하고 전문적으로 답변해야 합니다. 
            주로 AI 안전성(Safety), NLP, 멀티모달, 효율성에 대한 연구 내용을 설명해주세요. 
            답변은 한국어로, 핵심을 명확하게 전달하며 너무 길지 않게 작성하세요.`
                },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        const reply = completion.choices[0].message;

        return NextResponse.json({ result: reply });
    } catch (error) {
        console.error('OpenAI API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

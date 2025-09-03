import { openai } from '@ai-sdk/openai';
import { ModelMessage, streamText } from 'ai';
import 'dotenv/config';
import * as readline from 'node:readline/promises';
import { generateQuery, runGenerateSQLQuery } from './aiactions';

const aiModel = 'gpt-4o'

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const messages: ModelMessage[] = [];

async function main() {
  while (true) {
    const userInput = await terminal.question('User Input: ');

    // messages.push({ role: 'user', content: userInput });
    try {
        const query = await generateQuery(userInput);
        if (query === undefined) {
            console.error("An error occured due to an undefined query, please  try again");
            return
        }
        console.log("Generated query:", query);
        const results = await runGenerateSQLQuery(query);
        console.log(results);
    } catch (e) {
        console.error("An error occured:", e);
    }

    // const result = streamText({
    //   model: openai(aiModel),
    //   messages,
    // });

    // let fullResponse = '';
    // process.stdout.write(`\n ${aiModel}: `);
    // for await (const delta of result.textStream) {
    //   fullResponse += delta;
    //   process.stdout.write(delta);
    // }
    // process.stdout.write('\n\n');

    // messages.push({ role: 'assistant', content: fullResponse });
  }
}

main().catch(console.error);
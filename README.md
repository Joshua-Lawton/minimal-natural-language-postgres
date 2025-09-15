Minimal version of the Natural Language Postgres by Vercel Labs (https://github.com/vercel-labs/natural-language-postgres)

This project requires the dataset accessible from the README of the original GitHub Repo uploaded to a postgres database

Start by installing packages
```pnpm install```

(Using pnpm or other package manager)
Copy .env.example as .env, and replace ... with your OpenAI API key and postgres database link

Run the program with (if using pnpm)
```pnpm tsx index.ts```

The program with prompt the user with:
```User Input:```

Input the query for the unicorn database (setup through the above GitHub repo)

The program with output a JSON object with all items as given by the user input.

Alternatively, run the program with (if using pnpm)
```pnpm tsx web.ts```

The program will start an endpoint with a webpage, including a text input and submit button, and will return the output as a table below the input.
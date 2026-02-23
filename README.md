# LangGraph.js Quickstart

A minimal LangGraph.js research graph. Clone, set your key, run.

## Run in 3 steps

### 1. Clone & install

```bash
git clone https://github.com/Crewship/langgraph-js-quickstart.git
cd langgraph-js-quickstart
npm install
```

### 2. Set your API key

```bash
cp .env.example .env   # add your OPENAI_API_KEY
```

> **Using a different provider?** Swap the `ChatOpenAI` import in `src/graph.ts` and set the matching key — e.g. `ANTHROPIC_API_KEY` for Claude, `GROQ_API_KEY` for Groq (free tier).

### 3. Run

```bash
npm start
```

---

## What's inside

A two-node graph powered by GPT-4o mini:

- **researcher** — finds 5 key points about a topic
- **reporter** — turns them into a short markdown report

Change the topic in `src/main.ts`.

## Customise

- **Graph logic** → `src/graph.ts`
- **Entry point** → `src/main.ts`

## Learn more

- [LangGraph.js documentation](https://langchain-ai.github.io/langgraphjs/)
- [LangChain.js docs](https://js.langchain.com)

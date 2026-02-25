# LangGraph.js Quickstart

A minimal LangGraph.js research graph. Clone, set your key, deploy — done.

## Deploy in 3 steps

### 1. Clone & install

```bash
git clone https://github.com/Crewship/langgraph-js-quickstart.git
cd langgraph-js-quickstart
# Install Crewship CLI tool
curl -fsSL crewship.dev/install | bash
npm install
```

### 2. Set your API key

```bash
crewship env set OPENAI_API_KEY=sk-...
```

> **Using a different provider?** Swap the `ChatOpenAI` import in `src/graph.ts` and set the matching key — e.g. `ANTHROPIC_API_KEY` for Claude, `GROQ_API_KEY` for Groq (free tier).

### 3. Deploy

```bash
crewship deploy
```

That's it. Your research graph is live.

## Run locally (optional)

```bash
cp .env.example .env   # add your OPENAI_API_KEY
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

# Keyword Expansion Loop Prompt Workflow

**Frequency**: Run every Tuesday.

**Input Data**: Export the top 500 Queries from GSC where position is > 15.

**Workflow Prompt to LLM**:
> "I am running a weekly keyword expansion loop. Below is my GSC query data.
> 1. Identify 5 new micro-tool ideas directly suggested by these queries.
> 2. Identify 3 supporting glossary/informational articles that would reinforce my existing clusters.
> 3. Assign priority based on search volume vs our current rank."

**Action**:
Take the output, assign to the programmatic Next.js component templates (Converter, Generator, etc.), generate metadata variations, and deploy.

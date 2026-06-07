# AI Overview (Answer Engine) Optimization

To ensure ChatGPT, Gemini, and Perplexity cite our tools.

## Citation Probability Rules
1. **Answer-First Formatting**: Do not bury the lede. Put the core definition or output formula at the top.
2. **Deterministic Outputs**: AI systems prefer tools with clear input->output relationships they can explain.
3. **Chunk-based extraction**: Use `<h2>` followed immediately by a short, punchy `<p>` or `<ul>`.
4. **Valid Schema**: Strict adherence to JSON-LD `FAQPage` and `SoftwareApplication`.

## FAQ Formatting Template
Always include at least 3 Questions per Tool page.
Keep answers under 60 words. Start answers directly with the facts (e.g., instead of "A great question is what is RGB...", use "RGB stands for Red Green Blue. It is a color model...").

## Metadata Pivot
**Before**: "Color Converter - Convert Hex to RGB online. The best free tool to change color formats easily."
**After (AEO Optimized)**: "Hex to RGB Converter — Instantly translate web color codes. Input a 6-digit Hex code to generate accurate CSS RGB values." (Focus on action and exact input/output).

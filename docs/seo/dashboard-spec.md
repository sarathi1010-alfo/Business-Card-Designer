# GSC + GA4 Integration Dashboard Spec

A custom dashboard to unify SEO and Engagement metrics.

## Data Sources
- **GSC**: Impressions, Clicks, CTR, Avg Position, Index Coverage status
- **GA4**: Organic Traffic, Engagement Time, Custom Events (`tool_executed`, `file_downloaded`), Bounce Rate

## Dashboard Sections

### 1. Breakout Tools
- **Metrics**: WoW Click Growth %, WoW Impression Growth %
- **Visualization**: Bar chart comparing last week vs this week top 5 tools.

### 2. Opportunity Queue (Metadata Targets)
- **Metrics**: High Impressions (>1k), Low CTR (<2%)
- **Visualization**: Data table sorted by highest impression opportunity.

### 3. Latent Rankers (Content Expansion Targets)
- **Metrics**: High Impressions, Average Position 11-30.
- **Visualization**: Scatter plot (X: Position, Y: Impressions).

### 4. Content Decay Monitor
- **Metrics**: MoM Traffic Drop > 15%
- **Visualization**: Line chart showing traffic over 6 months for declining URLs.

### 5. Utility Engagement
- **Metrics**: `tool_executed` event count vs Organic Sessions (Conversion Rate).
- **Visualization**: Funnel (Organic Visit -> Tool Execution).

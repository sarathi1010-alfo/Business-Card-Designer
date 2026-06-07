# Content Decay Prevention System

## Detection Workflow (Quarterly)
Filter GSC for pages > 6 months old.
Compare Impressions last 28 days vs previous 28 days.
If traffic drop > 15%, flag for refresh.

## Refresh Checklist
1. **Verify Tool Logic**: Is the math/API still correct? Did an external dependency break?
2. **UI Modernization**: Does the component look dated compared to newer archetypes?
3. **Expand Content**: Add 2-3 new FAQ questions based on recent GSC queries.
4. **Update Schema**: Ensure `dateModified` in `Article` or `SoftwareApplication` schema is updated to today's date.
5. **Fresh Internal Links**: Link to 2 new tools that didn't exist when the page was first published.

# GSC Technical Fix Plan

## Crawled - currently not indexed
Issue: 3 legacy pages showing "Crawled - currently not indexed". These are the old test templates.
Legacy Pages:
1. /templates/modern
2. /templates/corporate
3. /templates/creative

Fix Plan:
1. Internal links have been added from the new Tier 1 article (\`/blog/industry-specific-networking-guide\`) to these 3 legacy pages to boost their perceived importance and crawl priority.
2. Request re-crawling via the GSC URL Inspection tool for these specific paths once the new guide is indexed.
3. Verified they are not blocked by \`robots.txt\`.

Status: Fix implemented in content layer. Awaiting re-crawl.

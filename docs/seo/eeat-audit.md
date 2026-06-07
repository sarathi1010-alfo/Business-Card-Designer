# EEAT Signal Audit for Utility Tools

For a programmatic micro-tool site, EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) is demonstrated through utility functionality, accuracy, and transparency.

## Page-Level Checklist
- [ ] Tool calculates/generates accurately (Zero bugs).
- [ ] Tool speed is fast (< 1s execution).
- [ ] Contains a "How this tool works" section explaining the underlying methodology or formula.
- [ ] Clear input constraints and error handling messages (e.g., "File too large").
- [ ] Privacy reassurance (e.g., "All processing happens in your browser. Files are not uploaded to our servers.").
- [ ] `SoftwareApplication` schema includes `aggregateRating` (if reviews exist) and `applicationCategory`.

## Site-Level Checklist
- [ ] Robust "About Us" page detailing the engineering/design team behind the tools.
- [ ] Clear "Terms of Service" and "Privacy Policy" linked in the global footer.
- [ ] "Contact Us" or bug reporting mechanism is easily accessible.
- [ ] Fast Core Web Vitals (Google's technical proxy for user trust).

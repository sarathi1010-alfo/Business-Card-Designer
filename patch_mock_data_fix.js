const fs = require('fs');
let content = fs.readFileSync('src/lib/templates/mock-data.ts', 'utf8');

// The error says "Parsing ecmascript source code failed at ./src/lib/templates/mock-data.ts:173:3"
// Wait, when I modified mock-data.ts earlier, I did:
// mockDataContent = mockDataContent.replace('];\n', newTemplates);
// Let's check if the closing bracket was correct.

content = content.replace(/\];\n/g, '];\n'); // not very helpful, let's just make sure it ends properly

// Let's print out the end of the file and line numbers

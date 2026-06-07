# Cluster Architecture Designer

## Hub-and-Spoke Model Example

**Cluster**: PDF Tools (`/tools/pdf-tools`)
**Hub Page Concept**: "The Complete Guide to PDF Tools"

### Spoke Pages Structure

| Type | Example URL Slug | Component Type | Internal Links | Schema Type |
| :--- | :--- | :--- | :--- | :--- |
| **Tool** | `/merge-pdf` | Transformer | Hub, Split PDF, Compress PDF | `SoftwareApplication` |
| **Tool** | `/split-pdf` | Transformer | Hub, Merge PDF, Compress PDF | `SoftwareApplication` |
| **Guide** | `/how-to-reduce-pdf-size` | Markdown | Hub, Compress PDF | `Article` |
| **Comparison** | `/best-free-pdf-editors` | Markdown | Hub, Edit PDF | `Article` |
| **Glossary** | `/what-is-ocr` | Markdown | Hub, PDF to Word | `FAQPage` |

*Note: Every spoke links back to the hub, and the hub links to all spokes.*

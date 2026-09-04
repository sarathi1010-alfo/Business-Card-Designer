const fs = require('fs');
const filePath = 'src/app/templates/[category]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const overrideCode = `
export const templateOverrides: Record<string, { titleCase: string, description: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: string }> = {
  'legal': {
    titleCase: 'Legal',
    description: 'Browse our collection of professional legal business card templates designed for lawyers and attorneys. Customize and download instantly.',
    faqHeader: 'Legal Business Card Template FAQs',
    q1: 'What makes a good legal business card template?',
    a1: 'A good legal business card template should project authority and trust. It typically utilizes conservative color palettes, classic typography, and a clean layout without distracting elements.',
    q2: 'Can I add my law firm logo?',
    a2: 'Yes, all our legal digital business card templates allow you to seamlessly upload and position your firm’s logo for consistent branding.',
    content: '<p>In the legal profession, your business card is often a client’s first impression of your practice. It needs to convey competence, stability, and trust. Our legal digital business card templates are designed with these specific requirements in mind. Featuring elegant typography and refined color schemes, these templates ensure your professional credentials are presented impeccably.</p><p>You can easily customize these templates to include links to your Avvo profile, practice areas, and secure client portals. Whether you are a solo practitioner or part of a large firm, our legal templates provide the perfect digital foundation for your professional networking.</p>'
  },
  'medical': {
    titleCase: 'Medical',
    description: 'Explore clean and accessible medical business card templates for doctors, clinics, and healthcare professionals. Customize for free.',
    faqHeader: 'Medical Business Card Template FAQs',
    q1: 'What should be on a medical business card template?',
    a1: 'Medical business cards should prioritize readability and trust. Essential elements include clear clinic contact info, emergency numbers, and links to patient portals or booking systems.',
    q2: 'Are these templates suitable for individual practitioners or entire clinics?',
    a2: 'Both. Our medical templates can be customized for individual doctors sharing their specific specialties, or adapted for an entire clinic to share general booking and location information.',
    content: '<p>Healthcare networking requires a focus on clarity, accessibility, and trust. Our medical business card templates are designed to provide a clean, reassuring aesthetic. They prioritize legibility so patients can easily find crucial information like clinic hours, emergency contacts, and direct links to online scheduling systems.</p><p>Whether you are a dentist, physical therapist, or specialized surgeon, a digital medical business card allows you to share comprehensive information effortlessly. By utilizing these templates, you provide patients with a modern, convenient way to keep your practice’s details readily available on their smartphones.</p>'
  }
};
`;

// Insert the override code after imports
content = content.replace("interface PageProps {", overrideCode + "\ninterface PageProps {");

// Update generateMetadata
const generateMetadataSearch = `export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\\b\\w/g, (c) => c.toUpperCase());

  return {
    title: \`\${titleCase} Business Card Templates Free\`,
    description: \`Browse our collection of free \${category} business card templates. Customize and download instantly.\`,
    alternates: {
      canonical: \`/templates/\${resolvedParams.category}\`,
    }
  };
}`;

const generateMetadataReplace = `export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCaseDefault = category.replace(/\\b\\w/g, (c) => c.toUpperCase());

  const override = templateOverrides[rawCategory];
  const titleCase = override ? override.titleCase : titleCaseDefault;
  const description = override ? override.description : \`Browse our collection of free \${category} business card templates. Customize and download instantly.\`;

  return {
    title: \`\${titleCase} Business Card Templates Free\`,
    description: description,
    alternates: {
      canonical: \`/templates/\${resolvedParams.category}\`,
    }
  };
}`;
content = content.replace(generateMetadataSearch, generateMetadataReplace);

// Update CategoryPage
const categoryPageSearch = `export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');
  const titleCase = category.replace(/\\b\\w/g, (c) => c.toUpperCase());

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const jsonLd = {`;

const categoryPageReplace = `export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawCategory = resolvedParams.category.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '').replace(/-templates/g, '');
  const category = rawCategory.replace(/-/g, ' ');

  const override = templateOverrides[rawCategory];
  const titleCase = override ? override.titleCase : category.replace(/\\b\\w/g, (c) => c.toUpperCase());

  const q1 = override ? override.q1 : \`What are \${titleCase} business card templates?\`;
  const a1 = override ? override.a1 : \`\${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a \${category} aesthetic to showcase their contact details and portfolio.\`;
  const q2 = override ? override.q2 : \`Can I customize the \${titleCase} digital business card templates?\`;
  const a2 = override ? override.a2 : \`Yes, all \${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.\`;
  const faqHeader = override ? override.faqHeader : "Frequently Asked Questions";
  const pageContent = override ? override.content : null;

  // Filter templates (in a real app, this would be a DB query)
  // We match against "Minimal", "Corporate", "Creative" etc.
  const categoryTemplates = mockTemplates.filter(t =>
    t.category.toLowerCase() === titleCase.toLowerCase() ||
    titleCase.toLowerCase().includes(t.category.toLowerCase())
  );
  const templatesToDisplay = categoryTemplates.length > 0 ? categoryTemplates : mockTemplates.slice(0, 3); // Fallback

  const jsonLd = {`;
content = content.replace(categoryPageSearch, categoryPageReplace);

const jsonLdSearch = `      {
        "@type": "Question",
        "name": \`What are \${titleCase} business card templates?\`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": \`\${titleCase} business card templates are pre-designed layouts optimized for professionals looking for a \${category} aesthetic to showcase their contact details and portfolio.\`
        }
      },
      {
        "@type": "Question",
        "name": \`Can I customize the \${titleCase} digital business card templates?\`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": \`Yes, all \${titleCase} templates on BrandCard are fully customizable. You can change colors, fonts, layout, and add your own logo and links.\`
        }
      }`;

const jsonLdReplace = `      {
        "@type": "Question",
        "name": q1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a1
        }
      },
      {
        "@type": "Question",
        "name": q2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": a2
        }
      }`;
content = content.replace(jsonLdSearch, jsonLdReplace);

const renderContentSearch = `        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {category} template and customize it for your brand.
        </p>`;

const renderContentReplace = `        <h1 className="text-4xl font-bold mb-4">{titleCase} Business Card Templates</h1>
        <p className="text-xl text-muted-foreground">
          Start with a professionally designed {titleCase.toLowerCase()} template and customize it for your brand.
        </p>
        {pageContent && (
          <div className="prose prose-lg dark:prose-invert mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: pageContent }} />
        )}`;
content = content.replace(renderContentSearch, renderContentReplace);

const renderFaqReplace2 = `
      {categoryTemplates.length === 0 && (
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}

      <div className="prose prose-lg dark:prose-invert max-w-none mt-16">
        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>
      </div>
    </div>
  );
}`;
content = content.replace(`      {categoryTemplates.length === 0 && (
        <div className="mt-8 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-muted-foreground">Showing popular templates. More {category} templates coming soon.</p>
        </div>
      )}
    </div>
  );
}`, renderFaqReplace2);

fs.writeFileSync(filePath, content);

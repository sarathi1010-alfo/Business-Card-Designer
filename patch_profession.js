const fs = require('fs');
const filePath = 'src/app/professions/[profession]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const overrideCode = `
export const professionOverrides: Record<string, { title: string, desc: string, snapshot: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: string }> = {
  'lawyer-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your legal',
    snapshot: 'A digital business card helps lawyers and attorneys securely share their contact details, schedule consultations, and maintain a high level of professionalism without relying on easily lost paper cards.',
    faqHeader: 'Frequently Asked Questions for Lawyers',
    q1: 'Why do lawyers need a digital business card?',
    a1: 'Lawyers need a digital business card to provide clients with an immediate, secure way to save their contact details, book consultations directly, and access their firm’s website instantly from their phone.',
    q2: 'Is a digital business card secure enough for legal professionals?',
    a2: 'Yes, digital business cards share public-facing professional information just like a paper card, but with added features like SSL encryption for your links and secure lead capture forms.',
    content: '<p>In the legal profession, trust and professionalism are paramount. A digital business card elevates your networking by ensuring your contact details are never lost or misplaced. When you meet a potential client or a colleague at a conference, a simple QR code scan instantly transfers your vCard to their phone. You can include links to your firm’s practice areas, your Avvo profile, or a direct link to schedule a consultation via Calendly.</p><p>Furthermore, digital cards allow you to track engagement. You can see when someone views your card or clicks your booking link, giving you valuable insights for follow-up. Embrace the modern standard of legal networking with a sleek, trackable digital business card.</p>'
  },
  'architect-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your architecture',
    snapshot: 'Architects can use digital business cards to instantly showcase their portfolio, share 3D rendering links, and provide contact details seamlessly via a QR code or NFC tap.',
    faqHeader: 'Frequently Asked Questions for Architects',
    q1: 'How can architects benefit from digital business cards?',
    a1: 'Architects can link directly to their digital portfolios, project galleries, and firm websites, turning a simple introduction into an immediate showcase of their design capabilities.',
    q2: 'What links should an architect include?',
    a2: 'In addition to standard contact info, architects should include links to their Behance or ArchDaily profiles, a PDF portfolio, and their firm’s main website.',
    content: '<p>Architecture is a highly visual field, and a traditional paper card simply cannot convey the depth of your work. A digital business card acts as a micro-portfolio in your pocket. By sharing your card via QR code, you instantly direct potential clients or collaborators to your best architectural designs, 3D renderings, and completed projects.</p><p>Our templates designed for architects emphasize clean lines and minimalist aesthetics, reflecting the principles of good design. You can easily update your card whenever you complete a new project, ensuring your network always has access to your most current and impressive work.</p>'
  },
  'dentist-digital-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your dental',
    snapshot: 'Dentists can use digital business cards to share clinic locations, appointment booking links, and emergency contact numbers instantly with patients.',
    faqHeader: 'Frequently Asked Questions for Dentists',
    q1: 'Why should a dentist use a digital business card?',
    a1: 'It allows dentists to provide patients with an easy way to save the clinic’s phone number, address, and online booking link directly to their smartphones, reducing missed appointments.',
    q2: 'Can patients book appointments through the card?',
    a2: 'Yes, you can include a direct link to your clinic’s scheduling software, making it incredibly convenient for patients to book their next checkup.',
    content: '<p>For dentists and dental clinics, patient retention and ease of access are critical. A digital business card streamlines the patient experience from the very first interaction. Instead of handing out paper cards that end up at the bottom of a purse, you can have patients scan a QR code at the reception desk to instantly save your clinic’s details, emergency contact numbers, and appointment booking link to their phone.</p><p>This modern approach not only looks professional but also significantly reduces friction for patients who need to contact you or schedule their next cleaning. You can even include links to patient intake forms or post-care instructions, making your digital card a comprehensive patient resource.</p>'
  },
  'accountant-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your accounting',
    snapshot: 'Accountants and CPAs can use digital business cards to securely share their contact details, client portal links, and tax season updates with clients.',
    faqHeader: 'Frequently Asked Questions for Accountants',
    q1: 'How do digital business cards help accountants?',
    a1: 'They provide a streamlined way to share contact info, links to secure document upload portals, and calendar links for tax consultation appointments.',
    q2: 'Is it easy to update my information during tax season?',
    a2: 'Absolutely. You can update your digital business card anytime to highlight tax deadlines, new services, or temporary office hours without needing to reprint anything.',
    content: '<p>In the financial sector, efficiency and security are key. A digital business card for accountants and CPAs is the perfect tool to modernize your client interactions. With a quick scan, clients can save your direct line, email, and office address. More importantly, you can include direct, secure links to your client portal for tax document uploads or your scheduling tool for financial consultations.</p><p>During the busy tax season, you can easily update your digital card to reflect extended hours or urgent deadlines. This dynamic capability ensures your clients always have the most accurate and useful information at their fingertips, reinforcing your position as a reliable and modern financial professional.</p>'
  }
};
`;

// Insert the override code just before extractLanguageAndProfession
content = content.replace('function extractLanguageAndProfession(slug: string)', overrideCode + '\nfunction extractLanguageAndProfession(slug: string)');

// Update generateMetadata
const generateMetadataSearch = `export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, profession } = extractLanguageAndProfession(resolvedParams.profession);
  const localeData = langMap[lang] || langMap.en;

  return {
    title: \`\${localeData.title} \${profession}\`,
    description: \`\${localeData.desc} \${profession.toLowerCase()} career. Impress clients and capture leads instantly.\`,
    alternates: {
      canonical: \`/professions/\${resolvedParams.profession}\`,
    }
  };
}`;

const generateMetadataReplace = `export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, profession } = extractLanguageAndProfession(resolvedParams.profession);

  const override = professionOverrides[resolvedParams.profession];
  const title = override ? \`\${override.title} \${profession}\` : \`\${(langMap[lang] || langMap.en).title} \${profession}\`;
  const description = override ? \`\${override.desc} \${profession.toLowerCase()} career. Impress clients and capture leads instantly.\` : \`\${(langMap[lang] || langMap.en).desc} \${profession.toLowerCase()} career. Impress clients and capture leads instantly.\`;

  return {
    title,
    description,
    alternates: {
      canonical: \`/professions/\${resolvedParams.profession}\`,
    }
  };
}`;
content = content.replace(generateMetadataSearch, generateMetadataReplace);

// Update ProfessionPage
const professionPageSearch = `export default async function ProfessionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { lang, profession: professionTitle } = extractLanguageAndProfession(resolvedParams.profession);
  const localeData = langMap[lang] || langMap.en;
  const faqData = faqMap[lang] || faqMap.en;

  const q1 = faqData.q1.replace('{profession}', professionTitle);
  const a1 = faqData.a1.replace('{profession}', professionTitle);
  const q2 = faqData.q2.replace('{profession}', professionTitle);
  const a2 = faqData.a2.replace('{profession}', professionTitle);`;

const professionPageReplace = `export default async function ProfessionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { lang, profession: professionTitle } = extractLanguageAndProfession(resolvedParams.profession);

  const override = professionOverrides[resolvedParams.profession];

  const localeData = override ? override : (langMap[lang] || langMap.en);

  const q1 = override ? override.q1 : (faqMap[lang] || faqMap.en).q1.replace('{profession}', professionTitle);
  const a1 = override ? override.a1 : (faqMap[lang] || faqMap.en).a1.replace('{profession}', professionTitle);
  const q2 = override ? override.q2 : (faqMap[lang] || faqMap.en).q2.replace('{profession}', professionTitle);
  const a2 = override ? override.a2 : (faqMap[lang] || faqMap.en).a2.replace('{profession}', professionTitle);
  const faqHeader = override ? override.faqHeader : (faqMap[lang] || faqMap.en).faqHeader;
  const pageContent = override ? override.content : null;`;

content = content.replace(professionPageSearch, professionPageReplace);

const renderContentSearch = `        <p>
          As a {professionTitle}, your network is your net worth. Whether you are meeting new clients, attending industry events, or pitching projects, a digital business card ensures you leave a memorable and professional first impression.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for {professionTitle}s</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Sharing:</strong> Share via QR code, text, or email in seconds.</li>
          <li><strong>Analytics & Tracking:</strong> See exactly when someone views your profile and what they click on.</li>
          <li><strong>Eco-friendly:</strong> Never print (or run out of) paper cards again.</li>
        </ul>`;

const renderContentReplace = `        {pageContent ? (
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        ) : (
          <>
            <p>
              As a {professionTitle}, your network is your net worth. Whether you are meeting new clients, attending industry events, or pitching projects, a digital business card ensures you leave a memorable and professional first impression.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for {professionTitle}s</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Instant Sharing:</strong> Share via QR code, text, or email in seconds.</li>
              <li><strong>Analytics & Tracking:</strong> See exactly when someone views your profile and what they click on.</li>
              <li><strong>Eco-friendly:</strong> Never print (or run out of) paper cards again.</li>
            </ul>
          </>
        )}`;
content = content.replace(renderContentSearch, renderContentReplace);

const faqHeaderSearch = `<h2 className="text-3xl font-semibold mt-12 mb-6">{faqData.faqHeader}</h2>`;
const faqHeaderReplace = `<h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>`;
content = content.replace(faqHeaderSearch, faqHeaderReplace);

fs.writeFileSync(filePath, content);

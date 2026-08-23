import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ profession: string }>;
}

export const faqMap: Record<string, { q1: string, a1: string, q2: string, a2: string, faqHeader: string }> = {
  en: {
    faqHeader: "Frequently Asked Questions",
    q1: "Why does a {profession} need a digital business card?",
    a1: "A {profession} needs a digital business card to instantly share their portfolio, contact information, and professional credentials with clients and peers without the limitations of traditional paper cards.",
    q2: "What should a {profession} include on their digital business card?",
    a2: "Key elements include a professional headshot, clear contact details, direct links to recent work or projects, social profiles, and a lead capture form to follow up with potential clients."
  },
  es: {
    faqHeader: "Preguntas Frecuentes",
    q1: "¿Por qué un {profession} necesita una tarjeta de presentación digital?",
    a1: "Un {profession} necesita una tarjeta de presentación digital para compartir al instante su cartera, información de contacto y credenciales profesionales con clientes y compañeros sin las limitaciones de las tarjetas de papel tradicionales.",
    q2: "¿Qué debe incluir un {profession} en su tarjeta de presentación digital?",
    a2: "Los elementos clave incluyen una foto profesional, datos de contacto claros, enlaces directos a trabajos o proyectos recientes, perfiles sociales y un formulario de captura de clientes potenciales."
  },
  fr: {
    faqHeader: "Foire Aux Questions",
    q1: "Pourquoi un {profession} a-t-il besoin d'une carte de visite numérique ?",
    a1: "Un {profession} a besoin d'une carte de visite numérique pour partager instantanément son portfolio, ses coordonnées et ses références professionnelles avec ses clients et ses pairs sans les limites des cartes en papier traditionnelles.",
    q2: "Que doit inclure un {profession} sur sa carte de visite numérique ?",
    a2: "Les éléments clés comprennent une photo professionnelle, des coordonnées claires, des liens directs vers des travaux ou des projets récents, des profils sociaux et un formulaire de capture de prospects."
  },
  de: {
    faqHeader: "Häufig gestellte Fragen",
    q1: "Warum braucht ein {profession} eine digitale Visitenkarte?",
    a1: "Ein {profession} benötigt eine digitale Visitenkarte, um sein Portfolio, seine Kontaktinformationen und seine beruflichen Referenzen sofort mit Kunden und Kollegen zu teilen, ohne die Einschränkungen herkömmlicher Papierkarten.",
    q2: "Was sollte ein {profession} auf seiner digitalen Visitenkarte angeben?",
    a2: "Zu den Schlüsselelementen gehören ein professionelles Porträtfoto, klare Kontaktdaten, direkte Links zu aktuellen Arbeiten oder Projekten, soziale Profile und ein Formular zur Lead-Erfassung."
  },
  it: {
    faqHeader: "Domande Frequenti",
    q1: "Perché un {profession} ha bisogno di un biglietto da visita digitale?",
    a1: "Un {profession} ha bisogno di un biglietto da visita digitale per condividere istantaneamente il proprio portfolio, le informazioni di contatto e le credenziali professionali con clienti e colleghi senza i limiti dei tradizionali biglietti cartacei.",
    q2: "Cosa dovrebbe includere un {profession} nel suo biglietto da visita digitale?",
    a2: "Gli elementi chiave includono una foto professionale, dettagli di contatto chiari, link diretti a lavori o progetti recenti, profili sociali e un modulo di acquisizione contatti."
  },
  pt: {
    faqHeader: "Perguntas Frequentes",
    q1: "Por que um {profession} precisa de um cartão de visita digital?",
    a1: "Um {profession} precisa de um cartão de visita digital para compartilhar instantaneamente seu portfólio, informações de contato e credenciais profissionais com clientes e colegas, sem as limitações dos cartões de papel tradicionais.",
    q2: "O que um {profession} deve incluir em seu cartão de visita digital?",
    a2: "Os elementos-chave incluem uma foto profissional, detalhes de contato claros, links diretos para trabalhos ou projetos recentes, perfis sociais e um formulário de captura de leads."
  },
  nl: {
    faqHeader: "Veelgestelde Vragen",
    q1: "Waarom heeft een {profession} een digitaal visitekaartje nodig?",
    a1: "Een {profession} heeft een digitaal visitekaartje nodig om direct zijn portfolio, contactgegevens en professionele referenties met klanten en collega's te delen zonder de beperkingen van traditionele papieren kaartjes.",
    q2: "Wat moet een {profession} op zijn digitale visitekaartje zetten?",
    a2: "Belangrijke elementen zijn onder meer een professionele profielfoto, duidelijke contactgegevens, directe links naar recent werk of projecten, sociale profielen en een formulier voor het vastleggen van leads."
  },
  ru: {
    faqHeader: "Часто задаваемые вопросы",
    q1: "Зачем {profession} нужна цифровая визитная карточка?",
    a1: "{profession} нуждается в цифровой визитной карточке, чтобы мгновенно делиться своим портфолио, контактной информацией и профессиональными учетными данными с клиентами и коллегами без ограничений традиционных бумажных карточек.",
    q2: "Что должен включить {profession} в свою цифровую визитную карточку?",
    a2: "Ключевые элементы включают профессиональную фотографию, четкие контактные данные, прямые ссылки на недавние работы или проекты, социальные профили и форму для захвата лидов."
  },
  zh: {
    faqHeader: "常见问题解答",
    q1: "为什么 {profession} 需要数字名片？",
    a1: "{profession} 需要数字名片来与客户和同行即时分享他们的作品集、联系信息和专业证书，而不受传统纸质名片的限制。",
    q2: "{profession} 应该在他们的数字名片上包括什么？",
    a2: "关键要素包括专业的头像、清晰的联系方式、指向近期工作或项目的直接链接、社交主页以及用于跟进潜在客户的潜在客户捕获表单。"
  },
  ja: {
    faqHeader: "よくある質問",
    q1: "なぜ {profession} にはデジタル名刺が必要なのですか？",
    a1: "{profession} は、従来の紙の名刺の制限なしに、ポートフォリオ、連絡先情報、および専門的な資格情報をクライアントや同僚と即座に共有するためにデジタル名刺を必要とします。",
    q2: "{profession} はデジタル名刺に何を含めるべきですか？",
    a2: "重要な要素には、プロの顔写真、明確な連絡先の詳細、最近の仕事やプロジェクトへの直接リンク、ソーシャルプロフィール、潜在的なクライアントをフォローアップするためのリード獲得フォームが含まれます。"
  },
  ko: {
    faqHeader: "자주 묻는 질문",
    q1: "{profession}에게 디지털 명함이 필요한 이유는 무엇인가요?",
    a1: "{profession}은 전통적인 종이 명함의 한계 없이 고객 및 동료와 포트폴리오, 연락처 정보, 전문 자격 증명을 즉시 공유하기 위해 디지털 명함이 필요합니다.",
    q2: "{profession}은 디지털 명함에 무엇을 포함해야 하나요?",
    a2: "핵심 요소로는 전문적인 얼굴 사진, 명확한 연락처 세부 정보, 최근 작업 또는 프로젝트에 대한 직접 링크, 소셜 프로필, 잠재 고객의 후속 조치를 위한 리드 캡처 양식이 있습니다."
  },
  ar: {
    faqHeader: "الأسئلة المتداولة",
    q1: "لماذا يحتاج {profession} إلى بطاقة عمل رقمية؟",
    a1: "يحتاج {profession} إلى بطاقة عمل رقمية لمشاركة محفظته ومعلومات الاتصال وبيانات الاعتماد المهنية الخاصة به على الفور مع العملاء والزملاء دون قيود البطاقات الورقية التقليدية.",
    q2: "ما الذي يجب أن يدرجه {profession} في بطاقة العمل الرقمية الخاصة به؟",
    a2: "تتضمن العناصر الرئيسية صورة احترافية وتفاصيل اتصال واضحة وروابط مباشرة لأحدث الأعمال أو المشاريع والملفات الشخصية الاجتماعية ونموذج التقاط العملاء المحتملين."
  },
  hi: {
    faqHeader: "अक्सर पूछे जाने वाले प्रश्न",
    q1: "{profession} को डिजिटल बिजनेस कार्ड की आवश्यकता क्यों है?",
    a1: "एक {profession} को पारंपरिक पेपर कार्ड की सीमाओं के बिना ग्राहकों और साथियों के साथ अपने पोर्टफोलियो, संपर्क जानकारी और पेशेवर क्रेडेंशियल्स को तुरंत साझा करने के लिए एक डिजिटल बिजनेस कार्ड की आवश्यकता होती है।",
    q2: "एक {profession} को अपने डिजिटल बिजनेस कार्ड पर क्या शामिल करना चाहिए?",
    a2: "प्रमुख तत्वों में एक पेशेवर हेडशॉट, स्पष्ट संपर्क विवरण, हाल के काम या परियोजनाओं के सीधे लिंक, सामाजिक प्रोफाइल और संभावित ग्राहकों के साथ पालन करने के लिए एक लीड कैप्चर फॉर्म शामिल हैं।"
  },
  tr: {
    faqHeader: "Sıkça Sorulan Sorular",
    q1: "Bir {profession} neden dijital kartvizite ihtiyaç duyar?",
    a1: "Bir {profession}, portföyünü, iletişim bilgilerini ve profesyonel kimlik bilgilerini müşteriler ve meslektaşlarıyla geleneksel kağıt kartların sınırlamaları olmadan anında paylaşmak için dijital bir kartvizite ihtiyaç duyar.",
    q2: "Bir {profession} dijital kartvizitine neleri dahil etmelidir?",
    a2: "Önemli unsurlar arasında profesyonel bir vesikalık fotoğraf, net iletişim bilgileri, son çalışmalara veya projelere doğrudan bağlantılar, sosyal profiller ve potansiyel müşterileri takip etmek için bir olası satış yakalama formu bulunur."
  },
  pl: {
    faqHeader: "Często Zadawane Pytania",
    q1: "Dlaczego {profession} potrzebuje cyfrowej wizytówki?",
    a1: "{profession} potrzebuje cyfrowej wizytówki, aby błyskawicznie udostępniać swoje portfolio, dane kontaktowe i poświadczenia zawodowe klientom i współpracownikom, bez ograniczeń tradycyjnych papierowych wizytówek.",
    q2: "Co {profession} powinien umieścić na swojej cyfrowej wizytówce?",
    a2: "Kluczowe elementy to profesjonalne zdjęcie, czytelne dane kontaktowe, bezpośrednie linki do ostatnich prac lub projektów, profile społecznościowe oraz formularz kontaktowy do pozyskiwania potencjalnych klientów."
  }
};

const langMap: Record<string, { title: string, desc: string, snapshot: string }> = {
  en: { title: "Digital Business Card for", desc: "Create a professional digital business card for your", snapshot: "A digital business card allows you to instantly share your professional profile, contact details, and portfolio via a simple QR code or link, eliminating the need for physical paper." },
  es: { title: "Tarjeta de Presentación Digital para", desc: "Crea una tarjeta de presentación digital profesional para tu", snapshot: "Una tarjeta de presentación digital le permite compartir instantáneamente su perfil profesional, datos de contacto y cartera a través de un simple código QR o enlace, eliminando la necesidad de papel físico." },
  fr: { title: "Carte de Visite Numérique pour", desc: "Créez une carte de visite numérique professionnelle pour votre", snapshot: "Une carte de visite numérique vous permet de partager instantanément votre profil professionnel, vos coordonnées et votre portfolio via un simple code QR ou un lien, éliminant ainsi le besoin de papier physique." },
  de: { title: "Digitale Visitenkarte für", desc: "Erstellen Sie eine professionelle digitale Visitenkarte für Ihre", snapshot: "Mit einer digitalen Visitenkarte können Sie Ihr berufliches Profil, Ihre Kontaktdaten und Ihr Portfolio sofort über einen einfachen QR-Code oder Link teilen, ohne dass physisches Papier erforderlich ist." },
  it: { title: "Biglietto da Visita Digitale per", desc: "Crea un biglietto da visita digitale professionale per la tua", snapshot: "Un biglietto da visita digitale ti consente di condividere istantaneamente il tuo profilo professionale, i dettagli di contatto e il portfolio tramite un semplice codice QR o un link, eliminando la necessità di carta fisica." },
  pt: { title: "Cartão de Visita Digital para", desc: "Crie um cartão de visita digital profissional para sua", snapshot: "Um cartão de visita digital permite que você compartilhe instantaneamente seu perfil profissional, detalhes de contato e portfólio através de um simples código QR ou link, eliminando a necessidade de papel físico." },
  nl: { title: "Digitaal Visitekaartje voor", desc: "Maak een professioneel digitaal visitekaartje voor uw", snapshot: "Met een digitaal visitekaartje kunt u direct uw professionele profiel, contactgegevens en portfolio delen via een eenvoudige QR-code of link, waardoor u geen fysiek papier meer nodig heeft." },
  ru: { title: "Цифровая визитная карточка для", desc: "Создайте профессиональную цифровую визитную карточку для вашей", snapshot: "Цифровая визитная карточка позволяет мгновенно делиться своим профессиональным профилем, контактными данными и портфолио с помощью простого QR-кода или ссылки, устраняя необходимость в физической бумаге." },
  zh: { title: "数字名片", desc: "为您的职业生涯创建专业的数字名片", snapshot: "数字名片使您能够通过简单的二维码或链接即时分享您的专业个人资料、联系方式和作品集，无需使用实体纸张。" },
  ja: { title: "デジタル名刺", desc: "あなたのキャリアのためのプロフェッショナルなデジタル名刺を作成します", snapshot: "デジタル名刺を使用すると、シンプルなQRコードやリンクを通じて、プロフェッショナルなプロフィール、連絡先、ポートフォリオを即座に共有でき、物理的な紙が不要になります。" },
  ko: { title: "디지털 명함", desc: "당신의 경력을 위한 전문적인 디지털 명함을 만드세요", snapshot: "디지털 명함을 사용하면 간단한 QR 코드나 링크를 통해 전문 프로필, 연락처 정보, 포트폴리오를 즉시 공유할 수 있어 물리적인 종이가 필요 없습니다." },
  ar: { title: "بطاقة عمل رقمية لـ", desc: "أنشئ بطاقة عمل رقمية احترافية لمسيرتك في", snapshot: "تتيح لك بطاقة العمل الرقمية مشاركة ملفك المهني وتفاصيل الاتصال ومحفظة أعمالك على الفور عبر رمز QR أو رابط بسيط، مما يلغي الحاجة إلى الورق المادي." },
  hi: { title: "डिजिटल बिजनेस कार्ड", desc: "अपने करियर के लिए एक पेशेवर डिजिटल बिजनेस कार्ड बनाएं", snapshot: "एक डिजिटल बिजनेस कार्ड आपको एक साधारण क्यूआर कोड या लिंक के माध्यम से अपने पेशेवर प्रोफ़ाइल, संपर्क विवरण और पोर्टफोलियो को तुरंत साझा करने की अनुमति देता है, जिससे भौतिक कागज की आवश्यकता समाप्त हो जाती है।" },
  tr: { title: "Dijital Kartvizit", desc: "Kariyeriniz için profesyonel bir dijital kartvizit oluşturun", snapshot: "Dijital bir kartvizit, profesyonel profilinizi, iletişim bilgilerinizi ve portföyünüzü basit bir QR kodu veya bağlantı yoluyla anında paylaşmanıza olanak tanır ve fiziksel kağıt ihtiyacını ortadan kaldırır." },
  pl: { title: "Cyfrowa Wizytówka dla", desc: "Stwórz profesjonalną cyfrową wizytówkę dla swojej", snapshot: "Cyfrowa wizytówka pozwala na błyskawiczne udostępnianie profilu zawodowego, danych kontaktowych i portfolio za pomocą prostego kodu QR lub linku, eliminując potrzebę używania fizycznego papieru." }
};


const professionOverrides: Record<string, { h1: string; intro: string; p1: string; p2: string; p3: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; snapshot: string }> = {
  'founder': {
    h1: "The Ultimate Digital Business Card for Startup Founders",
    snapshot: "For startup founders, a digital business card is the ultimate tool for instant connection, allowing you to share your deck, contact info, and vision through one dynamic link or QR code.",
    intro: "As a startup founder, you are always pitching. Every networking event, coffee meeting, or random encounter is an opportunity to share your vision and secure your next big partnership or investor.",
    p1: "In these crucial moments, fumbling with a paper card that simply says 'CEO' isn't enough. You need to instantly convey authority and provide immediate access to your ecosystem. A digital business card allows you to link directly to your pitch deck, your product demo, and your booking calendar. It turns a brief handshake into a trackable, actionable lead.",
    p2: "Founders move fast, and your contact information should too. With dynamic updates, if you pivot your brand, change your primary contact number, or launch a new initiative, your digital card reflects this instantly. No more handing out outdated paper cards.",
    p3: "Furthermore, the analytics provided by modern digital cards allow founders to see exactly who is engaging with their materials after a networking event. Did that VC scan your card and click through to your deck? Now you know exactly when to follow up for maximum impact.",
    faqHeader: "Startup Founder FAQ",
    q1: "What should a founder include on their digital business card?",
    a1: "A founder should include their professional headshot, company logo, a brief elevator pitch, direct links to their pitch deck or product demo, their calendar for booking meetings, and links to their LinkedIn and Twitter profiles.",
    q2: "How does a digital card help with fundraising?",
    a2: "It streamlines the process by ensuring potential investors instantly have your contact details and deck on their phone. Furthermore, scan analytics can show you which investors are actually engaging with your materials after an event."
  },
  'freelancer': {
    h1: "Digital Business Card for Freelancers: Win More Clients",
    snapshot: "Freelancers can use digital business cards to instantly showcase their portfolio, client testimonials, and booking rates, transforming casual networking into direct client acquisition.",
    intro: "As a freelancer, you are a one-person agency. Your ability to market yourself and acquire clients efficiently is just as important as the service you provide. You need tools that work as hard as you do.",
    p1: "A traditional business card only provides your email and phone number. A digital business card acts as a mini-landing page for your freelance business. You can immediately share links to your latest portfolio pieces, your up-to-date rate card, or your specialized services. When you meet a potential client, you aren't just giving them a way to contact you; you are proving your expertise on the spot.",
    p2: "Moreover, digital cards are incredibly cost-effective. As an independent worker, minimizing overhead is crucial. You never have to pay for a reprint when you rebrand or change your service offerings. Your card adapts with your freelance journey.",
    p3: "The built-in lead capture features are a game-changer for freelancers. Instead of hoping a prospect emails you, you can have them drop their details into a simple form on your card, sending their project requirements directly to your inbox so you can follow up with a proposal.",
    faqHeader: "Freelancer Networking FAQ",
    q1: "Why do freelancers need a digital business card?",
    a1: "Freelancers need a digital card to instantly showcase their portfolio and make it effortless for potential clients to book their services or request a quote immediately after meeting.",
    q2: "Can I link my portfolio to my digital card?",
    a2: "Yes! The best use of a freelancer digital card is linking directly to your Behance, Dribbble, GitHub, or personal portfolio website so clients can see your work immediately."
  },
  'real-estate-agent': {
    h1: "Digital Business Card for Real Estate Agents (Open House Ready)",
    snapshot: "Real estate agents leverage digital business cards to instantly share active listings, virtual tours, and contact information with buyers at open houses, capturing leads effortlessly.",
    intro: "In real estate, speed and relationship-building are everything. When you meet a prospective buyer or seller at an open house or a community event, you need to make an immediate, professional impression.",
    p1: "Real estate agents traditionally go through thousands of paper cards. But what happens when you want to show a client a specific listing? A digital business card allows you to embed links directly to your current Zillow listings, virtual property tours, or your professional agency page. It transforms a static introduction into an interactive property showcase.",
    p2: "Lead capture is vital in real estate. With a digital card, when a buyer scans your QR code at an open house sign-in sheet, you can immediately prompt them to save your contact info and fill out a brief form detailing what they are looking for (e.g., '3 bed, 2 bath').",
    p3: "Furthermore, you can integrate your digital card with your real estate CRM. When someone saves your card, their details can automatically populate your database, triggering an automated email sequence that keeps you top-of-mind during their home buying journey.",
    faqHeader: "Real Estate Networking FAQ",
    q1: "How can real estate agents use digital cards at open houses?",
    a1: "Agents can display their digital card's QR code on the sign-in table. Visitors scan it to instantly get the agent's contact info, view the property brochure, and submit their own contact details for follow-up.",
    q2: "What links should a realtor include?",
    a2: "Realtors should include links to their active property listings, 3D virtual tours, their Zillow or Realtor.com profile with reviews, and a calendar link to schedule private showings."
  },
  'consultant': {
    h1: "Digital Business Card for Consultants: Build Trust Instantly",
    snapshot: "Consultants build instant authority using digital business cards by sharing whitepapers, client case studies, and consultation booking links directly from their smart profile.",
    intro: "Consulting is built on trust and expertise. When you are hired to solve complex problems for businesses, your first impression must radiate authority and competence.",
    p1: "A digital business card helps consultants immediately establish their credentials. Instead of just sharing a name and title, you can provide instant access to your thought leadership. Link directly to your latest published whitepaper, an insightful case study of a past client success, or a high-converting landing page detailing your consulting methodology.",
    p2: "Frictionless scheduling is a major advantage. High-level consultants often play email tag trying to schedule initial discovery calls. By embedding your Calendly or booking link directly on your digital card, a prospect can book a time with you the moment they scan your code.",
    p3: "Additionally, the premium aesthetic of a well-designed digital card aligns perfectly with the high-value services consultants provide. It shows you are modern, organized, and leverage the best technology—qualities every client wants in a consultant.",
    faqHeader: "Consultant Networking FAQ",
    q1: "Why is a digital card better for consultants than paper?",
    a1: "It allows consultants to instantly share proof of their expertise (like case studies or articles) and provides a direct, frictionless way for prospects to book a discovery call.",
    q2: "What is the best call-to-action for a consultant's card?",
    a2: "The most effective CTA for a consultant is usually a direct link to book a free 15-minute introductory consultation or discovery call via a calendar integration."
  }
};

function extractLanguageAndProfession(slug: string) {
  // Check if slug ends with a known language code, e.g. "-es" or "-en"
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];

  let lang = 'en';
  let rawProfession = slug;

  if (lastPart && langMap[lastPart]) {
    lang = lastPart;
    parts.pop(); // remove lang code
    rawProfession = parts.join('-');
  }

  // Remove digital business card suffixes
  rawProfession = rawProfession.replace(/-digital-business-card/g, '').replace(/-digital-card/g, '');
  const profession = rawProfession.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return { lang, profession };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, profession } = extractLanguageAndProfession(resolvedParams.profession);
  const localeData = langMap[lang] || langMap.en;

  // Extract key for overrides (e.g. founder-digital-business-card -> founder)
  const overrideKey = resolvedParams.profession.replace(/-digital-business-card.*$/, '').replace(/-digital-card.*$/, '');
  const override = professionOverrides[overrideKey];

  return {
    title: override ? override.h1 : `${localeData.title} ${profession}`,
    description: `${localeData.desc} ${profession.toLowerCase()} career. Impress clients and capture leads instantly.`,
    alternates: {
      canonical: `/professions/${resolvedParams.profession}`,
    }
  };
}

export default async function ProfessionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { lang, profession: professionTitle } = extractLanguageAndProfession(resolvedParams.profession);
  const localeData = langMap[lang] || langMap.en;
  const faqData = faqMap[lang] || faqMap.en;

  const overrideKey = resolvedParams.profession.replace(/-digital-business-card.*$/, '').replace(/-digital-card.*$/, '');
  const override = professionOverrides[overrideKey];

  const q1 = override ? override.q1 : faqData.q1.replace('{profession}', professionTitle);
  const a1 = override ? override.a1 : faqData.a1.replace('{profession}', professionTitle);
  const q2 = override ? override.q2 : faqData.q2.replace('{profession}', professionTitle);
  const a2 = override ? override.a2 : faqData.a2.replace('{profession}', professionTitle);
  const faqHeader = override ? override.faqHeader : faqData.faqHeader;

  const h1 = override ? override.h1 : `${localeData.title} ${professionTitle}s`;
  const snapshot = override ? override.snapshot : localeData.snapshot;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
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
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
          {h1}
        </h1>
        <p className="text-xl text-muted-foreground">
          Stand out in your industry with a premium, interactive digital business card designed specifically for {professionTitle.toLowerCase()} professionals.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {override ? (
          <>
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary mb-8 not-prose">
              <p className="text-sm font-medium leading-relaxed m-0 text-muted-foreground">
                <strong>AI Snapshot:</strong> {snapshot}
              </p>
            </div>
            <p>{override.intro}</p>
            <p>{override.p1}</p>
            <p>{override.p2}</p>
            <p>{override.p3}</p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mt-12 mb-6">Why upgrade your professional networking?</h2>
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary mb-8 not-prose">
              <p className="text-sm font-medium leading-relaxed m-0 text-muted-foreground">
                <strong>AI Snapshot:</strong> {snapshot}
              </p>
            </div>
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
        )}

        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q1}</h3>
        <p>{a1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{q2}</h3>
        <p>{a2}</p>

        <div className="mt-12 text-center p-8 bg-muted rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to create your card?</h2>
          <p className="mb-6">Join thousands of {professionTitle.toLowerCase()}s using BrandCard.</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors">
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
}

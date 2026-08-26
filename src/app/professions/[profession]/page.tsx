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


const professionOverrides: Record<string, { title: string; desc: string; snapshot: string; faqHeader: string; q1: string; a1: string; q2: string; a2: string; content: string }> = {
  'founder': {
    title: 'The Ultimate Digital Business Card for Startup Founders',
    desc: 'Create a professional digital business card for your startup founder',
    snapshot: 'A digital business card allows startup founders to instantly share their professional profile, pitch deck, and contact details via a simple QR code, streamlining investor and partner connections.',
    faqHeader: 'Founder FAQ',
    q1: 'Why does a startup founder need a digital business card?',
    a1: 'A founder needs a digital business card to instantly share their startup vision, contact information, and pitch deck with potential investors and partners without the limitations of traditional paper cards.',
    q2: 'What should a founder include on their digital business card?',
    a2: 'Key elements include a professional headshot, clear contact details, direct links to the company website, pitch deck, social profiles, and a lead capture form to follow up with potential investors.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Mastering Founder Networking</h2>
      <p>
        As a startup founder, your primary job is often selling your vision. Whether you are at a tech meetup, a venture capital pitch event, or simply waiting in line for coffee, you never know when you might meet your next co-founder, early employee, or lead investor. A dynamic digital business card streamlines this process and ensures you are remembered as a forward-thinking innovator.
      </p>
      <p className="mt-4">
        Traditional paper business cards are obsolete for the modern founder. They get lost, they lack context, and crucially, they cannot hold a link to your pitch deck. With a BrandCard, you can consolidate your entire professional identity into a single, scannable QR code. When an investor scans your code, they aren't just getting your email address; they can instantly download your executive summary, view your product demo video, and book a meeting directly on your calendar.
      </p>
      <p className="mt-4">
        Furthermore, BrandCard provides you with invaluable analytics. If you hand out 50 paper cards at a conference, you have no idea if anyone actually looked at them. If you share your digital card 50 times, your dashboard will tell you exactly how many people opened your profile, which links they clicked, and whether they downloaded your deck. This data allows you to prioritize your follow-ups, focusing your limited time on the warmest leads.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for Founders</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Instant Pitch Delivery:</strong> Embed your pitch deck or product demo directly on your card.</li>
        <li><strong>Lead Capture:</strong> Use our built-in forms to easily collect details from potential hires or investors.</li>
        <li><strong>Analytics Tracking:</strong> See exactly who clicked your links to gauge investor interest in real-time.</li>
      </ul>
      <p>
        To maximize your success, ensure your digital card is always up-to-date with your latest milestones. By presenting a polished, tech-forward digital identity, you signal to the world that your startup is modern, efficient, and ready for scale.
      </p>
    `
  },
  'freelancer': {
    title: 'Digital Business Card for Freelancers: Win More Clients',
    desc: 'Create a professional digital business card for your freelancer',
    snapshot: 'A digital business card allows freelancers to instantly share their professional profile, portfolio, and contact details via a simple QR code or link, eliminating the need for physical paper.',
    faqHeader: 'Freelancer FAQ',
    q1: 'Why does a freelancer need a digital business card?',
    a1: 'A freelancer needs a digital business card to instantly share their portfolio, contact information, and professional credentials with clients without the limitations of traditional paper cards.',
    q2: 'What should a freelancer include on their digital business card?',
    a2: 'Key elements include a professional headshot, clear contact details, direct links to recent work or projects, social profiles, and a lead capture form to follow up with potential clients.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Winning Clients as a Freelancer</h2>
      <p>
        As a freelancer, you are your own marketing department. Every interaction is a potential client lead. Whether you are attending an industry mixer, co-working with peers, or meeting a prospect for lunch, a digital business card ensures you leave a memorable and professional first impression, immediately showcasing your value proposition.
      </p>
      <p className="mt-4">
        For freelancers—whether you are a writer, designer, developer, or consultant—your portfolio is your most powerful asset. A traditional paper card cannot showcase your past work. A digital business card bridges this gap effortlessly. By featuring a sleek QR code, you direct potential clients immediately to your online portfolio, your Behance profile, your GitHub repository, or your recent case studies. You are demonstrating your skills the second you make an introduction.
      </p>
      <p className="mt-4">
        Additionally, the built-in lead capture features of BrandCard transform how you build your client roster. Instead of hoping a prospect remembers to email you later, your digital card can prompt them to enter their contact details right then and there. This proactive approach ensures you never lose a hot lead to a misplaced paper card. You can also leverage the analytics dashboard to see when a prospect is reviewing your work, allowing you to time your follow-up emails perfectly.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for Freelancers</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Portfolio Integration:</strong> Share your best work instantly via QR code or text.</li>
        <li><strong>Lead Generation:</strong> Use our built-in forms to collect prospect details and build your email list.</li>
        <li><strong>Professional Polish:</strong> Present a modern, tech-savvy image that justifies premium rates.</li>
      </ul>
      <p>
        Make sure to customize your digital card to reflect your unique personal brand. Use your brand colors, upload a high-quality headshot, and ensure your value proposition is front and center. A well-crafted digital business card is the modern freelancer's secret weapon for consistent client acquisition.
      </p>
    `
  },
  'real-estate-agent': {
    title: 'Digital Business Card for Real Estate Agents (Open House Ready)',
    desc: 'Create a professional digital business card for your real estate agent',
    snapshot: 'A digital business card allows real estate agents to instantly share their professional profile, active listings, and contact details via a simple QR code, perfect for open houses.',
    faqHeader: 'Real Estate Agent FAQ',
    q1: 'Why does a real estate agent need a digital business card?',
    a1: 'A real estate agent needs a digital business card to instantly share their active listings, contact information, and professional credentials with buyers and sellers without relying on easily lost paper cards.',
    q2: 'What should a real estate agent include on their digital business card?',
    a2: 'Key elements include a professional headshot, clear contact details, direct links to current listings or virtual tours, social profiles, and a lead capture form to follow up with open house attendees.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Elevate Your Real Estate Networking</h2>
      <p>
        Real estate is fundamentally a relationship business. Whether you are hosting an open house, attending a community event, or meeting prospective buyers, your ability to quickly and memorably share your contact information is critical. A dynamic digital business card modernizes this process, ensuring you stand out in a competitive market.
      </p>
      <p className="mt-4">
        Open houses are the perfect environment for digital cards. Instead of leaving a stack of easily ignored paper cards on the kitchen counter, you can place a stylish acrylic sign featuring your BrandCard QR code. When attendees scan it, they don't just get your phone number—they get immediate access to the property's virtual tour, the digital brochure, your current Zillow reviews, and your other active listings. It creates an immersive digital experience right from their smartphone.
      </p>
      <p className="mt-4">
        More importantly, the lead capture functionality is a game-changer for agents. You can set up your digital card to require an email address or phone number before viewing the premium content (like a neighborhood market report). This ensures that every person who walks through your open house and scans your code is automatically added to your CRM for future follow-up. Combined with scan analytics, you'll know exactly which properties are generating the most digital interest.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for Real Estate Agents</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Open House Ready:</strong> Perfect for contactless sharing and property information distribution.</li>
        <li><strong>Automated Lead Capture:</strong> Collect buyer details seamlessly and sync them with your real estate CRM.</li>
        <li><strong>Rich Media Links:</strong> Share virtual tours, video walkthroughs, and Zillow profiles instantly.</li>
      </ul>
      <p>
        To get the most out of your digital card, update your links weekly with your hottest new listings. By providing immediate value through your digital profile, you position yourself as the hyper-local expert that buyers and sellers want to work with.
      </p>
    `
  },
  'consultant': {
    title: 'Digital Business Card for Consultants: Build Trust Instantly',
    desc: 'Create a professional digital business card for your consultant',
    snapshot: 'A digital business card allows consultants to instantly share their professional profile, case studies, and contact details via a simple QR code, establishing immediate authority.',
    faqHeader: 'Consultant FAQ',
    q1: 'Why does a consultant need a digital business card?',
    a1: 'A consultant needs a digital business card to instantly share their expertise, case studies, and contact information with prospects without the limitations of traditional paper cards.',
    q2: 'What should a consultant include on their digital business card?',
    a2: 'Key elements include a professional headshot, clear contact details, direct links to whitepapers or case studies, LinkedIn profile, and a lead capture form or calendar link to book a consultation.',
    content: `
      <h2 className="text-3xl font-semibold mt-12 mb-6">Establishing Authority as a Consultant</h2>
      <p>
        As a consultant, you are selling trust, expertise, and results. When you meet a prospective client, your introduction needs to immediately convey authority. A dynamic digital business card allows you to move beyond a simple name exchange and instantly present a comprehensive portfolio of your professional capabilities.
      </p>
      <p className="mt-4">
        The problem with paper cards in the consulting world is that they lack proof. Anyone can print 'Consultant' on a piece of cardstock. A BrandCard digital profile, however, allows you to immediately back up your claims. When a prospect scans your QR code, they can be directed to your latest industry whitepaper, a video testimonial from a satisfied CEO, or a detailed case study demonstrating your ROI. You are educating the prospect the moment you meet them.
      </p>
      <p className="mt-4">
        Furthermore, digital cards streamline the client acquisition pipeline. Instead of a multi-step dance of exchanging emails and trying to find a time to chat, your digital card can prominently feature a direct link to your Calendly or booking software. A prospect can scan your card, read a case study, and book an introductory discovery call with you before you even leave the networking event. The analytics provided by BrandCard also let you know which prospects are actively reviewing your materials, allowing for highly targeted follow-ups.
      </p>
      <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for Consultants</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Instant Authority:</strong> Share whitepapers, case studies, and testimonials via a single scan.</li>
        <li><strong>Frictionless Booking:</strong> Embed your calendar link directly on your profile to accelerate discovery calls.</li>
        <li><strong>Data-Driven Networking:</strong> Track which prospects are viewing your materials to prioritize follow-ups.</li>
      </ul>
      <p>
        Ensure your digital card reflects the premium nature of your consulting services. Opt for clean, minimalist design templates and focus on highlighting your most impressive results. A sophisticated digital presence is the first step in commanding premium consulting fees.
      </p>
    `
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, profession } = extractLanguageAndProfession(resolvedParams.profession);
  const localeData = langMap[lang] || langMap.en;

  const overrideKey = profession.toLowerCase().replace(/ /g, '-');
  const override = professionOverrides[overrideKey];

  return {
    title: override?.title || `${localeData.title} ${profession}`,
    description: override?.desc || `${localeData.desc} ${profession.toLowerCase()} career. Impress clients and capture leads instantly.`,
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

  const q1 = faqData.q1.replace('{profession}', professionTitle);
  const a1 = faqData.a1.replace('{profession}', professionTitle);
  const q2 = faqData.q2.replace('{profession}', professionTitle);
  const a2 = faqData.a2.replace('{profession}', professionTitle);

  const overrideKey = professionTitle.toLowerCase().replace(/ /g, '-');
  const override = professionOverrides[overrideKey];

  const pageTitle = override?.title || `${localeData.title} ${professionTitle}s`;
  const pageSnapshot = override?.snapshot || localeData.snapshot;

  const faqHeader = override?.faqHeader || faqData.faqHeader;
  const finalQ1 = override?.q1 || q1;
  const finalA1 = override?.a1 || a1;
  const finalQ2 = override?.q2 || q2;
  const finalA2 = override?.a2 || a2;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": finalQ1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": finalA1
        }
      },
      {
        "@type": "Question",
        "name": finalQ2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": finalA2
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
          {pageTitle}
        </h1>
        <p className="text-xl text-muted-foreground">
          Stand out in your industry with a premium, interactive digital business card designed specifically for {professionTitle.toLowerCase()} professionals.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Why upgrade your professional networking?</h2>
        <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary mb-8 not-prose">
          <p className="text-sm font-medium leading-relaxed m-0 text-muted-foreground">
            <strong>AI Snapshot:</strong> {pageSnapshot}
          </p>
        </div>
        {override ? (
          <div dangerouslySetInnerHTML={{ __html: override.content }} />
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
        )}

        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqHeader}</h2>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{finalQ1}</h3>
        <p>{finalA1}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">{finalQ2}</h3>
        <p>{finalA2}</p>

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

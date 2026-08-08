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


const professionOverrides: Record<string, { h1: string; p1: string; p2: string; q1: string; a1: string; q2: string; a2: string }> = {
  "founder": {
    h1: "The Ultimate Digital Business Card for Startup Founders",
    p1: "As a startup founder, networking isn't just about exchanging contacts—it's about pitching your vision, raising capital, and recruiting top talent. A digital business card allows you to instantly share your pitch deck, investor updates, and contact information with a single scan, making a lasting impression on VCs and potential partners.",
    p2: "Unlike traditional paper cards that get lost in the shuffle, a founder's digital business card provides real-time analytics. You'll know exactly when an investor views your profile and which links they click, allowing you to follow up with precision and context. It's an essential tool for accelerating your startup's growth.",
    q1: "What is a founder digital card?",
    a1: "A founder digital card is a modern networking tool that allows startup founders to share their contact details, pitch decks, company website, and social profiles instantly via a dynamic QR code or link.",
    q2: "How do I share it?",
    a2: "You can share your founder digital business card by displaying its QR code on your phone, adding the link to your email signature, or placing it in your social media bios and presentation slides."
  },
  "freelancer": {
    h1: "Digital Business Card for Freelancers: Win More Clients",
    p1: "For freelancers, your portfolio is your livelihood. A digital business card acts as a mini-website in your pocket, allowing you to showcase your best work, client testimonials, and service offerings instantly. Whether you're at a meetup or a coffee shop, you can seamlessly transition from a casual conversation to a professional pitch.",
    p2: "Stop relying on clunky PDF portfolios or physical business cards that lack context. A freelancer's digital business card includes built-in lead capture forms, enabling potential clients to request a quote or book a consultation directly from your profile. It's the ultimate tool for streamlining client acquisition and boosting your independent business.",
    q1: "Why does a freelancer need a digital business card?",
    a1: "A digital business card allows freelancers to share their portfolio, services, and contact info in one place, making it easier to convert casual conversations into paying clients without relying on paper cards.",
    q2: "Can I link my portfolio directly?",
    a2: "Yes, you can easily embed links to your Behance, Dribbble, GitHub, or personal portfolio website directly on your digital business card."
  },
  "real-estate-agent": {
    h1: "Digital Business Card for Real Estate Agents (Open House Ready)",
    p1: "In real estate, speed and accessibility are everything. A digital business card for real estate agents transforms how you connect with buyers and sellers. At open houses, simply have visitors scan your QR code to instantly receive your contact details, active listings, and virtual tour links directly on their smartphones.",
    p2: "A real estate digital business card goes beyond basic contact info. It allows you to embed video introductions, Zillow reviews, and direct calendar links for booking property viewings. With built-in lead capture and scan analytics, you'll know exactly who is engaging with your listings, giving you a competitive edge in a fast-paced market.",
    q1: "How does a digital business card help at an open house?",
    a1: "It allows attendees to instantly save your contact info and view property details by scanning a QR code, eliminating the need for paper flyers and ensuring you capture their information for follow-ups.",
    q2: "Can I add active property listings to my card?",
    a2: "Absolutely. You can add direct links to your active listings, virtual tours, and even a lead capture form to qualify potential buyers directly from the card."
  },
  "consultant": {
    h1: "Digital Business Card for Consultants: Build Trust Instantly",
    p1: "Consultants thrive on building trust and demonstrating expertise. A digital business card provides a polished, professional platform to showcase your thought leadership, case studies, and credentials the moment you meet a prospective client. It's a modern networking solution that reflects the high-value services you provide.",
    p2: "By utilizing a consultant digital business card, you streamline the client onboarding process. Include links to your whitepapers, scheduling tools like Calendly, and LinkedIn profile to provide a comprehensive view of your professional background. The integrated analytics also help you track engagement, ensuring your follow-ups are timely and relevant.",
    q1: "What should a consultant include on their digital business card?",
    a1: "A consultant should include their professional contact details, a link to book a consultation, links to published whitepapers or case studies, and their LinkedIn profile to establish authority.",
    q2: "Is it secure for sharing sensitive client information?",
    a2: "Your digital business card is designed for public sharing of your professional profile. For sensitive client information, always use secure, encrypted channels rather than your public networking card."
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

  return { lang, profession, rawProfession };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, profession, rawProfession } = extractLanguageAndProfession(resolvedParams.profession);
  const override = professionOverrides[rawProfession];
  const localeData = langMap[lang] || langMap.en;

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
  const { lang, profession: professionTitle, rawProfession } = extractLanguageAndProfession(resolvedParams.profession);
  const override = professionOverrides[rawProfession];
  const localeData = langMap[lang] || langMap.en;
  const faqData = faqMap[lang] || faqMap.en;

  const q1 = override ? override.q1 : faqData.q1.replace('{profession}', professionTitle);
  const a1 = override ? override.a1 : faqData.a1.replace('{profession}', professionTitle);
  const q2 = override ? override.q2 : faqData.q2.replace('{profession}', professionTitle);
  const a2 = override ? override.a2 : faqData.a2.replace('{profession}', professionTitle);

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
          {override ? override.h1 : `${localeData.title} ${professionTitle}s`}
        </h1>
        <p className="text-xl text-muted-foreground">
          Stand out in your industry with a premium, interactive digital business card designed specifically for {professionTitle.toLowerCase()} professionals.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2 className="text-3xl font-semibold mt-12 mb-6">Why upgrade your professional networking?</h2>
        <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary mb-8 not-prose">
          <p className="text-sm font-medium leading-relaxed m-0 text-muted-foreground">
            <strong>AI Snapshot:</strong> {localeData.snapshot}
          </p>
        </div>
        {override ? (
          <>
            <p>{override.p1}</p>
            <p className="mt-4">{override.p2}</p>
          </>
        ) : (
          <p>
            As a {professionTitle}, your network is your net worth. Whether you are meeting new clients, attending industry events, or pitching projects, a digital business card ensures you leave a memorable and professional first impression.
          </p>
        )}

        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Benefits for {professionTitle}s</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Instant Sharing:</strong> Share via QR code, text, or email in seconds.</li>
          <li><strong>Analytics & Tracking:</strong> See exactly when someone views your profile and what they click on.</li>
          <li><strong>Eco-friendly:</strong> Never print (or run out of) paper cards again.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-12 mb-6">{faqData.faqHeader}</h2>

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

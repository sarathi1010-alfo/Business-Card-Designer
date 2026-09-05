import React from 'react';
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

const professionOverrides: Record<string, { title: string, desc: string, snapshot: string, faqHeader: string, q1: string, a1: string, q2: string, a2: string, content: React.ReactNode }> = {
  'software-engineer-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your',
    snapshot: 'A digital business card for software engineers allows you to showcase your GitHub, technical blog, and recent projects with a simple scan.',
    faqHeader: 'Frequently Asked Questions for Engineers',
    q1: 'Why does a Software Engineer need a digital business card?',
    a1: 'It allows you to instantly share your code repositories, personal website, and contact information without carrying paper.',
    q2: 'What should a Software Engineer include on their digital business card?',
    a2: 'Include links to your GitHub, LinkedIn, technical portfolio, and a brief summary of your tech stack.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Optimizing Networking for Software Engineers</h2>
        <p>In the fast-paced tech industry, exchanging contact information needs to be as efficient as the code you write. A digital business card for a software engineer is not just a tool for sharing an email address; it is a gateway to your entire professional identity online. Whether you are attending a hackathon, a tech conference, or a casual meetup, having a digital card ensures that you can instantly connect with recruiters, founders, and fellow developers.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Showcasing Your Technical Portfolio</h3>
        <p>Unlike traditional professions, software engineers rely heavily on a portfolio of work. Your digital business card acts as a central hub. By linking directly to your GitHub profile, you allow potential employers or collaborators to dive straight into your repositories, see your commit history, and evaluate your coding style. Additionally, linking to your technical blog or personal website provides a comprehensive view of your expertise and thought leadership in the community.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Seamless Integration and Analytics</h3>
        <p>As a developer, you appreciate data. With a digital business card, you can track interactions. You can see how many people scanned your QR code or clicked your links after a tech conference. This data helps you understand which parts of your profile are generating the most interest, allowing you to iterate and optimize your networking strategy over time.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Standing Out in a Competitive Market</h3>
        <p>The tech job market is competitive. A sleek, modern digital business card demonstrates that you are forward-thinking and embrace digital solutions. It shows attention to detail and a commitment to leveraging technology for better communication. By customizing the design to reflect your personal brand—perhaps using a minimalist, dark-mode aesthetic—you leave a memorable impression that sets you apart from candidates still using paper resumes or generic social media profiles.</p>
      </>
    )
  },
  'designer-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your',
    snapshot: 'Designers can use digital business cards to instantly share their Dribbble, Behance, or personal portfolio with a single tap.',
    faqHeader: 'Frequently Asked Questions for Designers',
    q1: 'Why does a Designer need a digital business card?',
    a1: 'It provides a dynamic, visual way to share your design portfolio and contact details instantly.',
    q2: 'What should a Designer include on their digital business card?',
    a2: 'A link to your portfolio, Dribbble or Behance profiles, your resume, and a clear call to action.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Elevating Your Design Portfolio</h2>
        <p>For graphic designers, UI/UX designers, and creatives, aesthetics matter. A digital business card is an extension of your design portfolio. It is the first touchpoint a potential client or employer has with your personal brand. By utilizing a digital card, you can ensure that this initial interaction is visually striking and perfectly aligned with your design sensibilities, all without the constraints of printed media.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Interactive and Dynamic Content</h3>
        <p>Paper cards are static, but your work is dynamic. A digital business card allows you to include interactive elements. You can link directly to a video reel of your motion graphics, an interactive prototype on Figma, or your latest case study. This immediate access to your best work is invaluable when networking at creative industry events or pitching to new clients.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Always Up-to-Date</h3>
        <p>Design trends evolve quickly, and so does your portfolio. With a digital business card, you never have to worry about handing out outdated information or old portfolio links. When you complete a major project, you simply update the link on your digital card platform, and everyone who has your card instantly has access to your newest work.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Eco-Friendly Networking</h3>
        <p>Many clients in the design industry value sustainability. By ditching paper cards, you demonstrate a commitment to eco-friendly practices. This subtle choice can resonate with environmentally conscious clients and agencies, adding another positive layer to your professional image while streamlining your networking process.</p>
      </>
    )
  },
  'lawyer-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your',
    snapshot: 'Lawyers can securely and professionally share their contact information, firm details, and scheduling links instantly.',
    faqHeader: 'Frequently Asked Questions for Lawyers',
    q1: 'Is a digital business card professional enough for a lawyer?',
    a1: 'Yes, premium digital business cards offer a highly professional, secure way to share firm details and contact information.',
    q2: 'What should a Lawyer include on their digital business card?',
    a2: 'Firm name, direct contact number, secure email, areas of practice, and a link to schedule a consultation.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Modernizing Legal Networking</h2>
        <p>The legal profession is built on trust, authority, and professionalism. While traditional networking often involves exchanging heavy stock paper cards, a digital business card offers a modernized approach without sacrificing prestige. For lawyers, attorneys, and legal consultants, a digital card provides a secure, instantaneous method to share contact information with clients, opposing counsel, and partners.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Streamlining Client Intake</h3>
        <p>A digital business card can be a powerful tool for client acquisition. Instead of just sharing an email address, your digital card can include a direct link to your firm's secure intake form or a calendar link to schedule an initial consultation. This reduces friction, allowing potential clients to take immediate action while your conversation is still fresh in their minds.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Updating Information Seamlessly</h3>
        <p>Lawyers often change firms, update their areas of practice, or acquire new certifications. With a digital card, these updates are instantaneous. You never have to worry about a former client trying to reach you at an old firm. Your contact details remain current, ensuring you never miss an important communication or referral.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Maintaining Security and Privacy</h3>
        <p>Security is paramount in the legal field. Digital business cards allow you to control exactly what information you share. You can choose to share your direct line with trusted colleagues while providing a general firm number to new contacts. This flexibility ensures that you maintain professional boundaries while optimizing your networking efficiency.</p>
      </>
    )
  },
  'musician-digital-business-card': {
    title: 'Digital Business Card for',
    desc: 'Create a professional digital business card for your',
    snapshot: 'Musicians can share their latest tracks, Spotify profile, social media, and booking contacts instantly with industry professionals.',
    faqHeader: 'Frequently Asked Questions for Musicians',
    q1: 'Why does a Musician need a digital business card?',
    a1: 'It allows you to instantly share your music, social profiles, and booking information with fans and industry professionals.',
    q2: 'What should a Musician include on their digital business card?',
    a2: 'Links to Spotify/Apple Music, upcoming tour dates, social media handles, and contact details for booking.',
    content: (
      <>
        <h2 className="text-3xl font-semibold mt-12 mb-6">Connecting in the Music Industry</h2>
        <p>For musicians, bands, and producers, networking is essential for getting gigs, finding collaborators, and building a fanbase. In a loud, fast-paced venue or industry event, exchanging paper cards is often ineffective. A digital business card allows you to connect instantly, ensuring that A&R reps, promoters, and fans have immediate access to your music and contact information.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Instant Access to Your Sound</h3>
        <p>The most important part of your networking is your music. A digital business card allows you to embed links directly to your Spotify, Apple Music, or SoundCloud profiles. When you meet an industry professional, they can listen to your latest track immediately, rather than having to remember to search for your name later. This instant access can be the difference between securing a gig and being forgotten.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Centralizing Your Online Presence</h3>
        <p>Musicians often have a fragmented online presence—social media, streaming platforms, merchandise stores, and tour schedules. A digital business card acts as a central hub, bringing all these elements together in one sleek interface. It makes it easy for a new fan to follow you on Instagram, stream your music, and buy a ticket to your next show, all from a single scan.</p>
        <h3 className="text-2xl font-semibold mt-10 mb-4">Professionalism in Booking</h3>
        <p>When dealing with booking agents and venue managers, presenting a polished, professional image is crucial. A well-designed digital business card demonstrates that you take your career seriously. It provides a clean, organized way to share your press kit, technical rider, and booking contact details, streamlining the process for event organizers.</p>
      </>
    )
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

  return {
    title: `${localeData.title} ${profession}`,
    description: `${localeData.desc} ${profession.toLowerCase()} career. Impress clients and capture leads instantly.`,
    alternates: {
      canonical: `/professions/${resolvedParams.profession}`,
    }
  };
}

export default async function ProfessionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.profession;
  const override = professionOverrides[rawSlug];

  const { lang, profession: professionTitle } = extractLanguageAndProfession(resolvedParams.profession);

  const localeData = override ? {
    title: override.title,
    desc: override.desc,
    snapshot: override.snapshot
  } : (langMap[lang] || langMap.en);

  const faqData = override ? {
    faqHeader: override.faqHeader,
    q1: override.q1,
    a1: override.a1,
    q2: override.q2,
    a2: override.a2
  } : (faqMap[lang] || faqMap.en);


  const q1 = faqData.q1.replace('{profession}', professionTitle);
  const a1 = faqData.a1.replace('{profession}', professionTitle);
  const q2 = faqData.q2.replace('{profession}', professionTitle);
  const a2 = faqData.a2.replace('{profession}', professionTitle);

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
          {localeData.title} {professionTitle}s
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
        <p>
          As a {professionTitle}, your network is your net worth. Whether you are meeting new clients, attending industry events, or pitching projects, a digital business card ensures you leave a memorable and professional first impression.
        </p>

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

        {override && override.content && (
          <div className="mt-12">
            {override.content}
          </div>
        )}

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

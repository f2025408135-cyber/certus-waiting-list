export type Step = { n: string; title: string; text: string };
export type FaqItem = { q: string; a: string };
export type DiffItem = { title: string; text: string; statusQuo: string };
export type CredibilityItem = { title: string; text: string };

export const site = {
  name: "Certus",
  tagline: "Automatisch kalkulieren. Compliance-geprüft anbieten.",
};

export const hero = {
  eyebrow: "Pre-Launch",
  title: "Ihr LV, automatisch bepreist. | Sicher zurück in Ihrer AVA.",
  subtitle:
    "Das einzige Tool, das Ihr LV bepreist und Ihnen ein compliance-geprüftes, bepreistes .ONLV zurück in ABK/NEVARIS liefert — mit Ihren eigenen Lieferanten, inklusive Subunternehmer.",
  ctaPrimary: "Jetzt auf die Warteliste",
  ctaSecondary: "So funktioniert's",
  preLaunchNote: "Pre-Launch – Warteliste jetzt offen",
};

export const howItWorks = {
  eyebrow: "So funktioniert's",
  title: "Vier Schritte vom LV zur bepreisten Offerte",
  intro:
    "Certus übernimmt die mechanische Arbeit der Kalkulation. Sie bleiben bei Ihren Lieferanten und Ihrem AVA-Tool — der Weg dazwischen ist automatisiert.",
  steps: [
    {
      n: "01",
      title: "LV hochladen",
      text: "Sie laden Ihr Leistungsverzeichnis als .ONLV (ÖNORM A 2063) hoch. Formatprüfung, Positionen und Mengen werden automatisch erfasst.",
    },
    {
      n: "02",
      title: "Lieferanten werden automatisch angefragt",
      text: "Certus fragt Ihre bestehenden Lieferanten über Ihre Kontakte an — mit Ihren Preisanfragen, aus Ihren bestehenden Beziehungen. Kein Supplier-Onboarding, keine fremde Katalogwelt.",
    },
    {
      n: "03",
      title: "Antworten werden gelesen und verglichen",
      text: "PDF, Excel oder E-Mail: Die Antworten Ihrer Lieferanten werden eingelesen, normalisiert und in einem Preisspiegel gegenübergestellt — Position für Position.",
    },
    {
      n: "04",
      title: "Bepreistes .ONLV zurück in Ihre AVA",
      text: "Das Ergebnis wird gegen ÖNORM A 2063 / BVergG geprüft und als bepreistes .ONLV nach ABK oder NEVARIS exportiert. Keine manuelle Übertragung, kein Ausschlussgrund.",
    },
  ],
};

export const differentiators = {
  eyebrow: "Der Unterschied",
  title: "Warum Certus anders arbeitet",
  intro:
    "Der Markt setzt auf Kataloge und fremde Lieferantennetze. Certus rechnet mit dem, was Sie bereits haben: Ihren Lieferanten, Ihren Subunternehmern und Ihrem AVA-Tool.",
  items: [
    {
      title: "AVA-Round-Trip statt manueller Übertragung",
      text: "Das bepreiste LV kommt als compliance-geprüftes .ONLV zurück nach ABK/NEVARIS. Ergebnis und Prüfungsprotokoll bleiben in Ihrer gewohnten Umgebung — nichts wird händisch neu erfasst.",
      statusQuo: "Preise werden in Excel gesammelt und Position für Position manuell in die AVA übertragen — fehleranfällig und aufwendig.",
    },
    {
      title: "Ihre eigenen Lieferanten",
      text: "Certus fragt die Lieferanten an, die Sie bereits kennen und mit denen Sie verlässlich arbeiten. Kein Supplier-Onboarding, keine Pflicht, sich in ein fremdes Netz einzugliedern.",
      statusQuo: "Angebote werden per E-Mail und Telefon angefragt, Erinnerungen geschrieben, Antworten selbst erfasst — oder man weicht auf plattformgebundene Kataloge aus.",
    },
    {
      title: "Subunternehmer und Dienstleister eingerechnet",
      text: "Arbeitspakete, die an Subunternehmer oder Dienstleister vergeben werden, sind Teil der Kalkulation — nicht nur Materiallieferanten. Auch deren Angebote landen im Preisspiegel.",
      statusQuo: "Subunternehmerangebote werden separat eingeholt und mühsam auf Positionen aufgeteilt, oft außerhalb der Kalkulation.",
    },
    {
      title: "Unstrukturierte Antworten werden gelesen",
      text: "PDF, Excel oder E-Mail — die Antworten Ihrer Lieferanten sind selten einheitlich. Certus liest sie, gleicht sie ab und baut daraus einen belastbaren Preisspiegel.",
      statusQuo: "Jede Antwort wird von Hand geprüft, Preise werden herausgeschrieben und in eigene Vorlagen übertragen.",
    },
    {
      title: "ÖNORM-Compliance statt Disqualifikation",
      text: "Bietet Ihr LV gegen ÖNORM A 2063 und BVergG verstoßende Positionen, fällt es aus der Wertung. Certus prüft Ihre Bepreisung gegen die Norm, bevor Sie abgeben.",
      statusQuo: "Vergessene KO-Positionen oder Formfehler werden erst im Vergabeverfahren entdeckt — oft mit Ausschluss als Folge.",
    },
  ],
};

export const credibility = {
  eyebrow: "Transparenz",
  title: "Was Sie über uns wissen sollten",
  intro:
    "Wir sind im Pre-Launch. Keine aufgebauschten Zahlen — nur das, was wir wirklich gebaut und getestet haben.",
  items: [
    {
      title: "Technisch erprobt",
      text: "Die Bepreisungs-Engine ist intern durchgängig getestet. Das ÖNORM-Compliance-Gate hat in unseren Tests keine KO-Position übersehen. Wir nennen das bewusst intern — echte Kundenprojekte folgen mit der Beta.",
    },
    {
      title: "Mit Kalkulant:innen entwickelt",
      text: "Certus entsteht gemeinsam mit erfahrenen Kalkulant:innen aus der Baubranche. Die Workflows sind an der realen LV-Praxis orientiert, nicht am Reißbrett.",
    },
    {
      title: "Keine Supplier-Onboarding-Pflicht",
      text: "Sie behalten Ihre Lieferantenbeziehungen. Certus arbeitet mit dem, was bei Ihnen bereits funktioniert — es gibt keinen Zwang zu Katalogen oder neuen Plattformen.",
    },
    {
      title: "Direkter Draht zu den Gründern",
      text: "Die Warteliste bringt frühen Zugang zur Beta und direkte Rückmeldung der Gründer. Ihre Erfahrungen fließen unmittelbar in die Produktentwicklung ein.",
    },
  ],
  disclaimer:
    "Pre-Launch: Inhalte und Termine können sich bis zum Launch ändern. Wir erfinden keine Referenzkunden.",
};

export const faq = {
  eyebrow: "Häufige Fragen",
  title: "Das fragen sich Kalkulant:innen am häufigsten",
  items: [
    {
      q: "Muss ich meine Lieferanten wechseln?",
      a: "Nein. Certus fragt Ihre bestehenden Lieferanten an und nutzt Ihre Kontakte. Es gibt keine Pflicht, sich auf Plattformen oder in Kataloge einzugliedern — Ihre Lieferantenbeziehungen bleiben unangetastet.",
    },
    {
      q: "Welche AVA-Tools werden unterstützt?",
      a: "Certus arbeitet mit dem standardisierten .ONLV-Format (ÖNORM A 2063). Der Export läuft zurück nach ABK und NEVARIS; weitere Tools wie ORCA oder RIB iTWO sind kompatibel, sofern sie .ONLV unterstützen.",
    },
    {
      q: "Funktioniert das auch mit Subunternehmern?",
      a: "Ja. Arbeitspakete, die von Subunternehmern oder Dienstleistern bepreist werden, werden eingelesen und in den Preisspiegel übernommen — die Kalkulation deckt nicht nur Materiallieferanten ab.",
    },
    {
      q: "Was kostet Certus?",
      a: "Die Preisgestaltung ist noch in Abstimmung. Die Warteliste ist derzeit kostenlos und sichert Ihnen frühen Zugang zur Beta. Sobald die Modelle stehen, erfahren Sie es zuerst.",
    },
    {
      q: "Was passiert mit meinen Daten?",
      a: "Ihre LV und Angebote werden DSGVO-konform behandelt, nur mit Ihrer Einwilligung verarbeitet und nicht an Dritte verkauft. Details regelt die Datenschutzerklärung.",
    },
    {
      q: "Wann ist der Launch?",
      a: "Wir geben keine Versprechen mit erfundenen Daten ab. Wir melden uns mit Ihrem Zugang, sobald die Beta startet. Die Warteliste ist die zuverlässigste Informationsquelle.",
    },
  ],
};

export const form = {
  heading: "Auf die Warteliste",
  intro:
    "Sichern Sie sich frühen Zugang zur Beta und ein direktes Gespräch mit den Gründern.",
  labels: {
    name: "Name",
    email: "E-Mail",
    company: "Unternehmen",
    role: "Rolle",
    companySize: "Unternehmensgröße",
    avaTool: "Welche AVA-Software nutzen Sie?",
    pain: "Was ist Ihre größte Herausforderung beim Kalkulieren?",
    consent:
      "Ich willige ein, dass meine Angaben gespeichert und ich per E-Mail kontaktiert werde. Meine Einwilligung kann ich jederzeit widerrufen.",
  },
  placeholders: {
    name: "Max Mustermann",
    email: "max@unternehmen.at",
    company: "Mustermann Bau GmbH",
    pain: "z. B. Lieferantenpreise einholen, Preisspiegel bauen, …",
  },
  roles: [
    "Kalkulant/in",
    "Baumeister/in",
    "Geschäftsführer/in",
    "Projektleiter/in",
    "Sonstiges",
  ],
  companySizes: ["1–9", "10–49", "50–79", "80–199", "200+"],
  avaTools: ["ABK", "NEVARIS", "ORCA", "RIB iTWO", "andere", "keine"],
  consentLinkText: "Datenschutzerklärung",
  submit: "Jetzt auf die Warteliste",
  submitting: "Wird eingetragen …",
  successTitle: "Danke! Sie sind auf der Warteliste.",
  successText:
    "Wir melden uns bei Ihnen, sobald die Beta startet. Bitte beachten Sie: Sie erhalten möglicherweise eine Bestätigungs-E-Mail zur Verifizierung (Double Opt-in).",
  errors: {
    required: "Bitte füllen Sie dieses Feld aus.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    consent: "Bitte bestätigen Sie die Datenschutzerklärung.",
    general: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
  privacyHint:
    "Ihre Daten werden nur mit Ihrer Einwilligung gespeichert, nicht verkauft und DSGVO-konform verarbeitet.",
};

export const footer = {
  note: "Certus bepreist österreichische Leistungsverzeichnisse für Baumeister und Generalunternehmer — mit Ihren eigenen Lieferanten, ÖNORM-geprüft.",
  contactLabel: "Kontakt",
  contactEmail: "[E-Mail – einzutragen]",
  datenschutz: "/datenschutz",
  impressum: "/impressum",
  legalLabel: "Rechtliches",
  copyright: "© 2026 Certus",
};

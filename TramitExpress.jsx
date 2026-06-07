import { useState } from "react";

const translations = {
  en: {
    tagline: "Know before you go.",
    subtitle: "Select what you need and get your exact checklist — documents, office, window, cost.",
    selectPrompt: "What do you need to do today?",
    step: "Step",
    of: "of",
    required: "Required Documents",
    office: "Where to Go",
    window: "Window / Area",
    hours: "Office Hours",
    cost: "Cost",
    tip: "Pro Tip",
    startOver: "Start Over",
    getChecklist: "Get My Checklist",
    language: "Language",
    back: "Back",
    processes: [
      { id: "acta", label: "Birth Certificate", emoji: "📄" },
      { id: "ine", label: "Voter ID (INE)", emoji: "🪪" },
      { id: "curp", label: "CURP", emoji: "🔢" },
      { id: "rfc", label: "RFC / Tax ID", emoji: "💼" },
      { id: "placas", label: "Vehicle Plates", emoji: "🚗" },
      { id: "licencia", label: "Driver's License", emoji: "🪪" },
      { id: "predial", label: "Property Tax (Predial)", emoji: "🏠" },
      { id: "negocio", label: "Business Permit", emoji: "🏪" },
    ],
  },
  es: {
    tagline: "Sabe antes de ir.",
    subtitle: "Selecciona lo que necesitas y obtén tu lista exacta — documentos, oficina, ventanilla, costo.",
    selectPrompt: "¿Qué necesitas hacer hoy?",
    step: "Paso",
    of: "de",
    required: "Documentos Requeridos",
    office: "Dónde Ir",
    window: "Ventanilla / Área",
    hours: "Horario de Atención",
    cost: "Costo",
    tip: "Consejo",
    startOver: "Empezar de Nuevo",
    getChecklist: "Ver Mi Lista",
    language: "Idioma",
    back: "Regresar",
    processes: [
      { id: "acta", label: "Acta de Nacimiento", emoji: "📄" },
      { id: "ine", label: "Credencial INE", emoji: "🪪" },
      { id: "curp", label: "CURP", emoji: "🔢" },
      { id: "rfc", label: "RFC", emoji: "💼" },
      { id: "placas", label: "Placas Vehiculares", emoji: "🚗" },
      { id: "licencia", label: "Licencia de Manejo", emoji: "🪪" },
      { id: "predial", label: "Predial", emoji: "🏠" },
      { id: "negocio", label: "Permiso de Negocio", emoji: "🏪" },
    ],
  },
  zh: {
    tagline: "出发前先了解。",
    subtitle: "选择您需要的服务，获取精确清单——文件、办公室、窗口、费用。",
    selectPrompt: "今天您需要办理什么？",
    step: "步骤",
    of: "/",
    required: "所需文件",
    office: "前往地点",
    window: "窗口 / 区域",
    hours: "办公时间",
    cost: "费用",
    tip: "实用建议",
    startOver: "重新开始",
    getChecklist: "查看清单",
    language: "语言",
    back: "返回",
    processes: [
      { id: "acta", label: "出生证明", emoji: "📄" },
      { id: "ine", label: "选民证 (INE)", emoji: "🪪" },
      { id: "curp", label: "CURP 编号", emoji: "🔢" },
      { id: "rfc", label: "税务编号 RFC", emoji: "💼" },
      { id: "placas", label: "车牌", emoji: "🚗" },
      { id: "licencia", label: "驾驶执照", emoji: "🪪" },
      { id: "predial", label: "房产税", emoji: "🏠" },
      { id: "negocio", label: "营业执照", emoji: "🏪" },
    ],
  },
};

const checklists = {
  acta: {
    en: {
      docs: ["Original CURP (printed from gob.mx)", "Valid government-issued ID (INE or passport)", "If requesting for a minor: parent's INE + CURP of child", "If correcting data: old acta + supporting evidence"],
      office: "Registro Civil Torreón — Blvd. Independencia 1520, Col. Centro",
      window: "Window 1–3 (New Requests) / Window 4 (Corrections)",
      hours: "Mon–Fri 8:00 AM – 3:00 PM",
      cost: "Free (first copy) / $90–$120 MXN (certified copies)",
      tip: "Arrive before 9 AM. The line fills up fast. Bring 2 printed copies of your CURP just in case.",
    },
    es: {
      docs: ["CURP original (impresa desde gob.mx)", "Identificación oficial vigente (INE o pasaporte)", "Si es para menor: INE del padre/madre + CURP del menor", "Si hay corrección de datos: acta anterior + documentos de respaldo"],
      office: "Registro Civil Torreón — Blvd. Independencia 1520, Col. Centro",
      window: "Ventanilla 1–3 (Solicitudes Nuevas) / Ventanilla 4 (Correcciones)",
      hours: "Lun–Vie 8:00 – 15:00 hrs",
      cost: "Gratis (primera copia) / $90–$120 MXN (copias certificadas)",
      tip: "Llega antes de las 9 AM. La fila se llena rápido. Lleva 2 copias impresas de tu CURP por si acaso.",
    },
    zh: {
      docs: ["原始CURP（从gob.mx打印）", "有效政府颁发的身份证（INE或护照）", "如为未成年人申请：父母INE + 孩子的CURP", "如需更正数据：旧出生证明 + 相关证明文件"],
      office: "托雷翁民事登记处 — Blvd. Independencia 1520, Col. Centro",
      window: "窗口 1–3（新申请）/ 窗口 4（更正）",
      hours: "周一至周五 上午8:00 – 下午3:00",
      cost: "免费（第一份）/ 90–120墨西哥比索（认证副本）",
      tip: "建议9点前到达，排队人数增长很快。建议多打印2份CURP备用。",
    },
  },
  ine: {
    en: {
      docs: ["Birth certificate (acta de nacimiento — certified copy)", "Proof of address: CFE or water bill, max 3 months old", "CURP printed from gob.mx", "2 passport-size photos (white background)"],
      office: "INE Módulo Torreón — Plaza Las Américas, Local 14",
      window: "Reception desk — request appointment number first",
      hours: "Mon–Fri 9:00 AM – 5:00 PM (appointment recommended)",
      cost: "Free",
      tip: "Book your appointment at ine.mx/citas beforehand. Walk-ins can wait 2–3 hours. Bring originals AND copies of everything.",
    },
    es: {
      docs: ["Acta de nacimiento (copia certificada)", "Comprobante de domicilio: recibo CFE o agua, máximo 3 meses", "CURP impresa desde gob.mx", "2 fotos tamaño infantil (fondo blanco)"],
      office: "Módulo INE Torreón — Plaza Las Américas, Local 14",
      window: "Recepción — solicita tu número de turno primero",
      hours: "Lun–Vie 9:00 – 17:00 hrs (se recomienda cita previa)",
      cost: "Gratis",
      tip: "Agenda tu cita en ine.mx/citas. Sin cita puedes esperar 2–3 horas. Lleva originales Y copias de todo.",
    },
    zh: {
      docs: ["出生证明（认证副本）", "地址证明：CFE或水费账单，不超过3个月", "从gob.mx打印的CURP", "2张护照照片（白色背景）"],
      office: "托雷翁INE办事处 — Plaza Las Américas, 14号",
      window: "接待处 — 请先取号",
      hours: "周一至周五 上午9:00 – 下午5:00（建议预约）",
      cost: "免费",
      tip: "建议提前在ine.mx/citas预约。未预约可能等待2-3小时。请携带所有文件的原件和复印件。",
    },
  },
  curp: {
    en: {
      docs: ["Birth certificate (acta de nacimiento)", "Valid ID: INE, passport, or school ID for minors"],
      office: "Online: gob.mx/curp — No office visit needed in most cases",
      window: "If in-person needed: Registro Civil or DIF offices",
      hours: "Online 24/7 / In-person: Mon–Fri 8:00 AM – 3:00 PM",
      cost: "Free",
      tip: "Try gob.mx/curp first — 90% of people can get their CURP printed online in under 2 minutes. Only go in person if the system can't find you.",
    },
    es: {
      docs: ["Acta de nacimiento", "Identificación vigente: INE, pasaporte o credencial escolar (menores)"],
      office: "En línea: gob.mx/curp — En la mayoría de casos no necesitas ir a ningún lado",
      window: "Si es presencial: Registro Civil o DIF",
      hours: "En línea 24/7 / Presencial: Lun–Vie 8:00 – 15:00 hrs",
      cost: "Gratis",
      tip: "Prueba primero en gob.mx/curp — el 90% de personas obtiene su CURP en menos de 2 minutos. Solo ve en persona si el sistema no te encuentra.",
    },
    zh: {
      docs: ["出生证明", "有效身份证：INE、护照或学生证（未成年人）"],
      office: "在线：gob.mx/curp — 大多数情况下无需亲自前往",
      window: "如需本人办理：民事登记处或DIF办公室",
      hours: "在线24小时 / 本人办理：周一至周五 上午8:00 – 下午3:00",
      cost: "免费",
      tip: "先尝试gob.mx/curp——90%的人可在2分钟内在线获取CURP。只有系统找不到您时才需要亲自前往。",
    },
  },
  rfc: {
    en: {
      docs: ["CURP (printed)", "Valid INE or passport", "Proof of address (max 3 months old)", "Email address you actively use", "Personal phone number"],
      office: "SAT Torreón — Blvd. Diagonal Reforma 6, Col. República Oriente",
      window: "Module 1 (New RFC) / Module 3 (Updates)",
      hours: "Mon–Fri 8:30 AM – 3:30 PM (appointment required)",
      cost: "Free",
      tip: "You MUST book an appointment at sat.gob.mx/citas — they do not accept walk-ins. Book at least 2 weeks in advance.",
    },
    es: {
      docs: ["CURP (impresa)", "INE o pasaporte vigente", "Comprobante de domicilio (máximo 3 meses)", "Correo electrónico activo", "Número de teléfono personal"],
      office: "SAT Torreón — Blvd. Diagonal Reforma 6, Col. República Oriente",
      window: "Módulo 1 (RFC Nuevo) / Módulo 3 (Actualizaciones)",
      hours: "Lun–Vie 8:30 – 15:30 hrs (cita obligatoria)",
      cost: "Gratis",
      tip: "Es OBLIGATORIO agendar cita en sat.gob.mx/citas — no atienden sin cita. Agenda con al menos 2 semanas de anticipación.",
    },
    zh: {
      docs: ["CURP（打印版）", "有效INE或护照", "地址证明（不超过3个月）", "常用电子邮件地址", "个人手机号码"],
      office: "托雷翁SAT税务局 — Blvd. Diagonal Reforma 6, Col. República Oriente",
      window: "窗口1（新RFC）/ 窗口3（更新）",
      hours: "周一至周五 上午8:30 – 下午3:30（需预约）",
      cost: "免费",
      tip: "必须在sat.gob.mx/citas预约——不接受无预约办理。请至少提前2周预约。",
    },
  },
  placas: {
    en: {
      docs: ["Vehicle title / Factura (original + copy)", "Valid INE or passport", "Proof of address (max 3 months)", "Proof of insurance (seguro vigente)", "Previous plates (if renewal)"],
      office: "SEMOVI Coahuila — Blvd. Diagonal Reforma 615, Col. República",
      window: "Window A (New) / Window B (Renewals) / Window C (Transfers)",
      hours: "Mon–Fri 8:00 AM – 3:00 PM",
      cost: "$1,200–$2,500 MXN depending on vehicle type",
      tip: "Make sure your factura has NO liens (no adeudos). Check predial and tenencia payments are up to date or they will turn you away.",
    },
    es: {
      docs: ["Factura del vehículo (original + copia)", "INE o pasaporte vigente", "Comprobante de domicilio (máximo 3 meses)", "Póliza de seguro vigente", "Placas anteriores (si es renovación)"],
      office: "SEMOVI Coahuila — Blvd. Diagonal Reforma 615, Col. República",
      window: "Ventanilla A (Nuevas) / Ventanilla B (Renovaciones) / Ventanilla C (Traspasos)",
      hours: "Lun–Vie 8:00 – 15:00 hrs",
      cost: "$1,200–$2,500 MXN según tipo de vehículo",
      tip: "Verifica que tu factura no tenga adeudos. Asegúrate de tener predial y tenencia al corriente o te van a mandar de regreso.",
    },
    zh: {
      docs: ["车辆发票/Factura（原件+复印件）", "有效INE或护照", "地址证明（不超过3个月）", "有效保险证明", "旧车牌（如为更新）"],
      office: "科阿韦拉SEMOVI — Blvd. Diagonal Reforma 615, Col. República",
      window: "窗口A（新办）/ 窗口B（续期）/ 窗口C（过户）",
      hours: "周一至周五 上午8:00 – 下午3:00",
      cost: "1,200–2,500墨西哥比索（根据车辆类型）",
      tip: "确保您的发票没有欠款。确认predial和tenencia税款已缴清，否则会被拒绝办理。",
    },
  },
  licencia: {
    en: {
      docs: ["Valid INE or passport", "CURP (printed)", "Proof of address (max 3 months)", "Blood type certificate (tipo de sangre)", "Medical certificate from approved clinic", "2 passport photos (white background)"],
      office: "SEMOVI Torreón — Blvd. Diagonal Reforma 615, Col. República",
      window: "Window D (New License) / Window E (Renewal)",
      hours: "Mon–Fri 8:00 AM – 2:30 PM",
      cost: "$400–$600 MXN (3-year license)",
      tip: "Get your medical certificate the same morning from a clinic near SEMOVI — they know exactly what format is needed. Takes about 20 min and costs ~$150 MXN.",
    },
    es: {
      docs: ["INE o pasaporte vigente", "CURP (impresa)", "Comprobante de domicilio (máximo 3 meses)", "Certificado de tipo de sangre", "Certificado médico de clínica autorizada", "2 fotos tamaño infantil (fondo blanco)"],
      office: "SEMOVI Torreón — Blvd. Diagonal Reforma 615, Col. República",
      window: "Ventanilla D (Nueva Licencia) / Ventanilla E (Renovación)",
      hours: "Lun–Vie 8:00 – 14:30 hrs",
      cost: "$400–$600 MXN (licencia 3 años)",
      tip: "Saca tu certificado médico esa misma mañana en alguna clínica cerca de SEMOVI — ya saben el formato exacto. Tarda ~20 min y cuesta ~$150 MXN.",
    },
    zh: {
      docs: ["有效INE或护照", "CURP（打印版）", "地址证明（不超过3个月）", "血型证明", "认可诊所的体检证明", "2张护照照片（白色背景）"],
      office: "托雷翁SEMOVI — Blvd. Diagonal Reforma 615, Col. República",
      window: "窗口D（新驾照）/ 窗口E（续期）",
      hours: "周一至周五 上午8:00 – 下午2:30",
      cost: "400–600墨西哥比索（3年期驾照）",
      tip: "建议当天早上在SEMOVI附近的诊所获取体检证明——他们清楚所需格式。约需20分钟，费用约150墨西哥比索。",
    },
  },
  predial: {
    en: {
      docs: ["Property account number (número de cuenta predial)", "Valid INE", "Previous predial receipt (if available)", "Property deed (escritura) for ownership changes"],
      office: "Tesorería Municipal Torreón — Av. Morelos 380 Pte., Col. Centro",
      window: "Window 1–4 (Payment) / Window 5 (Disputes) / Window 6 (Ownership Transfer)",
      hours: "Mon–Fri 8:00 AM – 3:00 PM",
      cost: "Varies by property value. Discounts apply Jan–Feb each year.",
      tip: "Pay in January or February — the municipality offers up to 15% discount. Bring cash OR card, but confirm card works before going.",
    },
    es: {
      docs: ["Número de cuenta predial", "INE vigente", "Recibo de predial anterior (si tienes)", "Escritura del inmueble (para cambios de propietario)"],
      office: "Tesorería Municipal Torreón — Av. Morelos 380 Pte., Col. Centro",
      window: "Ventanilla 1–4 (Pago) / Ventanilla 5 (Aclaraciones) / Ventanilla 6 (Cambio de Propietario)",
      hours: "Lun–Vie 8:00 – 15:00 hrs",
      cost: "Varía según valor del inmueble. Hay descuentos en enero y febrero.",
      tip: "Paga en enero o febrero — el municipio da hasta 15% de descuento. Lleva efectivo O tarjeta, pero confirma que la terminal funciona antes de ir.",
    },
    zh: {
      docs: ["房产税账户号码", "有效INE", "上次房产税收据（如有）", "房产契约（如需更换所有权）"],
      office: "托雷翁市财政局 — Av. Morelos 380 Pte., Col. Centro",
      window: "窗口1–4（缴费）/ 窗口5（争议）/ 窗口6（所有权转让）",
      hours: "周一至周五 上午8:00 – 下午3:00",
      cost: "根据房产价值而定。1月至2月有折扣优惠。",
      tip: "建议1月或2月缴纳——市政府提供高达15%的折扣。携带现金或银行卡，但建议出发前确认刷卡机是否正常工作。",
    },
  },
  negocio: {
    en: {
      docs: ["Valid INE", "RFC", "Proof of address (business location)", "Lease agreement or property deed", "CURP", "Fill out Uso de Suelo form at city hall first"],
      office: "Dirección de Desarrollo Económico — Presidencia Municipal, Av. Morelos 380, Col. Centro",
      window: "Ground floor — Business Permits counter",
      hours: "Mon–Fri 8:00 AM – 3:00 PM",
      cost: "$500–$2,000+ MXN depending on business type and size",
      tip: "First step is always Uso de Suelo — confirm your location is zoned for your business type BEFORE signing any lease. Many people skip this and lose their deposit.",
    },
    es: {
      docs: ["INE vigente", "RFC", "Comprobante de domicilio del negocio", "Contrato de arrendamiento o escritura del local", "CURP", "Llenar formato de Uso de Suelo en el Ayuntamiento primero"],
      office: "Dirección de Desarrollo Económico — Presidencia Municipal, Av. Morelos 380, Col. Centro",
      window: "Planta baja — Módulo de Licencias de Funcionamiento",
      hours: "Lun–Vie 8:00 – 15:00 hrs",
      cost: "$500–$2,000+ MXN según giro y tamaño del negocio",
      tip: "El primer paso siempre es el Uso de Suelo — verifica que tu local esté en zona permitida para tu giro ANTES de firmar contrato. Mucha gente pierde su depósito por saltarse esto.",
    },
    zh: {
      docs: ["有效INE", "RFC税务编号", "营业地址证明", "租赁协议或房产契约", "CURP", "首先在市政厅填写土地用途（Uso de Suelo）表格"],
      office: "经济发展局 — 托雷翁市政厅, Av. Morelos 380, Col. Centro",
      window: "一楼 — 营业执照窗口",
      hours: "周一至周五 上午8:00 – 下午3:00",
      cost: "500–2,000+墨西哥比索（根据业务类型和规模）",
      tip: "第一步始终是土地用途确认——在签署任何租约之前，确认您的营业地点符合业务类型的分区要求。许多人因跳过此步骤而损失了押金。",
    },
  },
};

const LANGS = ["es", "en", "zh"];
const LANG_LABELS = { es: "Español", en: "English", zh: "中文" };

export default function TramitExpress() {
  const [lang, setLang] = useState("es");
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const t = translations[lang];
  const checklist = selected ? checklists[selected]?.[lang] : null;

  const handleSelect = (id) => {
    setSelected(id);
    setShowResult(false);
  };

  const handleBack = () => {
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
      fontFamily: "'Sora', 'Segoe UI', sans-serif",
      color: "#f0f0f0",
      padding: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .card-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #f0f0f0;
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
        }
        .card-btn:hover {
          background: rgba(255, 160, 0, 0.12);
          border-color: rgba(255, 160, 0, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,160,0,0.15);
        }
        .card-btn.active {
          background: rgba(255, 160, 0, 0.18);
          border-color: #FFA000;
          box-shadow: 0 0 20px rgba(255,160,0,0.25);
        }
        .lang-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 6px 14px;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .lang-btn.active {
          background: #FFA000;
          border-color: #FFA000;
          color: #000;
        }
        .lang-btn:hover:not(.active) {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }
        .cta-btn {
          background: linear-gradient(135deg, #FFA000, #FF6F00);
          border: none;
          border-radius: 14px;
          padding: 16px 32px;
          cursor: pointer;
          color: #000;
          font-family: 'Sora', sans-serif;
          font-size: 16px;
          font-weight: 800;
          width: 100%;
          transition: all 0.2s;
          letter-spacing: 0.3px;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(255,160,0,0.4);
        }
        .cta-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
          transform: none;
        }
        .back-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          padding: 10px 20px;
          cursor: pointer;
          color: rgba(255,255,255,0.6);
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .back-btn:hover { border-color: #FFA000; color: #FFA000; }
        .doc-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          font-size: 14px;
          line-height: 1.5;
        }
        .doc-item:last-child { border-bottom: none; }
        .info-row {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 10px;
        }
        .info-label {
          font-size: 11px;
          font-weight: 700;
          color: #FFA000;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
          font-family: 'Space Mono', monospace;
        }
        .info-value {
          font-size: 14px;
          color: #e0e0e0;
          line-height: 1.5;
        }
        .tip-box {
          background: linear-gradient(135deg, rgba(255,160,0,0.1), rgba(255,111,0,0.05));
          border: 1px solid rgba(255,160,0,0.3);
          border-radius: 12px;
          padding: 16px;
          margin-top: 12px;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }
        .section-title {
          font-size: 12px;
          font-weight: 700;
          color: #FFA000;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          font-family: 'Space Mono', monospace;
        }
      `}</style>

      {/* Background orbs */}
      <div className="glow-orb" style={{ width: 400, height: 400, background: "#FFA000", top: -100, right: -100 }} />
      <div className="glow-orb" style={{ width: 300, height: 300, background: "#1565C0", bottom: 100, left: -80 }} />

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "24px 16px 48px" }}>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px", color: "#fff" }}>Trámit</span>
                <span style={{
                  background: "linear-gradient(135deg, #FFA000, #FF6F00)",
                  color: "#000",
                  fontWeight: 800,
                  fontSize: 22,
                  padding: "2px 10px",
                  borderRadius: 8,
                  letterSpacing: "-0.5px"
                }}>Express</span>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "Space Mono, monospace" }}>
                Torreón, Coahuila
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {LANGS.map(l => (
                <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
                  {l === "zh" ? "中文" : l === "es" ? "ES" : "EN"}
                </button>
              ))}
            </div>
          </div>

          {!showResult && (
            <div style={{
              background: "rgba(255,160,0,0.06)",
              border: "1px solid rgba(255,160,0,0.15)",
              borderRadius: 14,
              padding: "16px 18px",
            }}>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4, lineHeight: 1.2 }}>{t.tagline}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{t.subtitle}</div>
            </div>
          )}
        </div>

        {/* Result view */}
        {showResult && checklist ? (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <button className="back-btn" onClick={handleBack}>← {t.back}</button>
              <div style={{ fontSize: 22 }}>
                {t.processes.find(p => p.id === selected)?.emoji}
                <span style={{ marginLeft: 8, fontSize: 15, fontWeight: 700 }}>
                  {t.processes.find(p => p.id === selected)?.label}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div className="section-title">✓ {t.required}</div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "4px 16px",
              }}>
                {checklist.docs.map((doc, i) => (
                  <div key={i} className="doc-item">
                    <span style={{
                      minWidth: 22,
                      height: 22,
                      background: "linear-gradient(135deg, #FFA000, #FF6F00)",
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      fontWeight: 800,
                      color: "#000",
                      marginTop: 1,
                    }}>{i + 1}</span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-row">
              <div className="info-label">📍 {t.office}</div>
              <div className="info-value">{checklist.office}</div>
            </div>
            <div className="info-row">
              <div className="info-label">🪟 {t.window}</div>
              <div className="info-value">{checklist.window}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
              <div className="info-row" style={{ marginBottom: 0 }}>
                <div className="info-label">🕐 {t.hours}</div>
                <div className="info-value" style={{ fontSize: 12 }}>{checklist.hours}</div>
              </div>
              <div className="info-row" style={{ marginBottom: 0 }}>
                <div className="info-label">💰 {t.cost}</div>
                <div className="info-value" style={{ fontSize: 12 }}>{checklist.cost}</div>
              </div>
            </div>

            <div className="tip-box">
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FFA000", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6, fontFamily: "Space Mono, monospace" }}>
                💡 {t.tip}
              </div>
              <div style={{ fontSize: 13, color: "#e0e0e0", lineHeight: 1.6 }}>{checklist.tip}</div>
            </div>

            <button className="back-btn" onClick={handleBack} style={{ marginTop: 20, width: "100%" }}>
              ← {t.startOver}
            </button>
          </div>
        ) : (
          /* Selection view */
          <div>
            <div className="section-title" style={{ marginBottom: 14 }}>
              {t.selectPrompt}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
              {t.processes.map((p) => (
                <button
                  key={p.id}
                  className={`card-btn ${selected === p.id ? "active" : ""}`}
                  onClick={() => handleSelect(p.id)}
                >
                  <span style={{ fontSize: 24 }}>{p.emoji}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.3 }}>{p.label}</span>
                </button>
              ))}
            </div>
            <button
              className="cta-btn"
              disabled={!selected}
              onClick={() => setShowResult(true)}
            >
              {t.getChecklist} →
            </button>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 32, fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "Space Mono, monospace" }}>
          TrámitExpress • Torreón, Coahuila • v0.1
        </div>
      </div>
    </div>
  );
}

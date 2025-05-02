import { Check } from "lucide-react";
import Link from "next/link"
import { useLanguage } from "../context/LanguageContext";

const plans = [
  {
    name: "Plan Básico",
    description: "Ideal para pequeños negocios",
    price: 400,
    features: [
      "Diseño personalizado adaptado a la identidad del negocio.",
      "Enlace  de contacto integrado (email o botón de WhatsApp)",
      "Enlaces a redes sociales.",
      "Hostin g gratuto en Vercel."
    ],
    badge: null,
    tips: [
      "Perfecto para probar sin compromiso el ecosistema de Wizzard Studio.",
      "Recomendado para freelancers o tiendas con catálogo reducido.",
      "Puedes escalar al plan Premium en cualquier momento.",
      "Componentes visuales modernos y atractivos para presentar tu información de forma clara y profesional."
    ],
    href: "https://wa.me/5493855079729?text=Hola%2C%20te%20escribo%20desde%20Wizzard%20Studio%20porque%20quiero%20comenzar%20con%20el%20Plan%20B%C3%A1sico%20para%20mi%20p%C3%A1gina%20web.%20%C2%A1Estoy%20listo%20para%20dar%20el%20primer%20paso%21%20%C2%BFMe%20podr%C3%ADas%20guiar%20con%20los%20siguientes%20pasos%3F"

  },
  {
    name: "Plan Premium",
    description: "Para empresas en crecimiento",
    price: 750,
    features: [
      "Incluye todo lo del plan basico",
      "Sección de novedades o blog (opcional)",
      "Soporte técnico 24/7",
      "Integraciones avanzadas",
      "Reportes personalizados",
      "Pasarela de pago. ",
      "Dominio personalizado "
    ],
    badge: "Popular",
    tips: [
      "Ideal para equipos que necesitan colaboración y automatización.",
      "Las integraciones avanzadas incluyen CRM, ERP y herramientas de marketing.",
      "Más del 80% de nuestros clientes eligen este plan tras 3 meses de uso."
    ],
    href:"https://wa.me/5493855079729?text=Hola%2C%20te%20contacto%20desde%20Wizzard%20Studio%20porque%20quiero%20comenzar%20con%20el%20Plan%20Premium%20para%20mi%20sitio%20web.%20Estoy%20buscando%20una%20soluci%C3%B3n%20profesional%20y%20completa.%20%C2%BFCu%C3%A1les%20son%20los%20siguientes%20pasos%20para%20empezar%3F"
  },
  {
    name: "Plan Personalizado",
    description: "Adaptado 100% a tus necesidades y objetivos",
    price: "1000-1500",
    features: [
      "Incluye todo lo de plan premium",
      "Diseño a medida",
      "Funcionalidades personalizadas",
      "Asesoramiento estratégico",

    ],
    badge: "Flexible",
    tips: [
      "Ideal si buscás una solución única que se adapte a tus ideas y objetivos.",
      "El precio se define según el alcance, complejidad y funcionalidades requeridas.",
      "Contanos qué necesitás y creamos un plan a tu medida, sin límites predeterminados.",
    ]
  }
  
];


export default function PricingPlans() {
    const { t } = useLanguage();
  
  return (
    <div
    id="planes"
      className="relative bg-cover bg-center bg-no-repeat py-12"
      style={{
        backgroundImage: 'url("/img/pergamino-bg.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  hover:bg-black/70 transition-all duration-500" />

      {/* Contenido */}
      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10 text-white">
          <h2 className="text-3xl font-bold tracking-tight">{t?.cards?.title}</h2>
          <p className="mt-4 text-white/80">{t?.cards?.subtitle}</p>
        </div>

        {/* Grid de 3 columnas para los planes */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-white">
          {t?.cards?.plans.map((plan: { name: string; badge?: string; description: string; price: number | string; features: string[]; href?: string }) => (
            <div
              key={plan.name}
              className="flex flex-col relative border border-white/20 rounded-lg bg-black/30 hover:bg-black/40 transition-all shadow-md"
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="p-6 pb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-white/70">{plan.description}</p>
                {plan.price !== null && (
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    ${plan.price}
                    <span className="ml-1 text-xl font-medium text-white/70">/mes</span>
                  </div>
                )}
              </div>

              {/* Lista de features */}
              <div className="px-6 pb-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón */}
              <div className="px-6 pb-6 pt-6">
                <Link
                href={plan.href || "#"}
                > 
                <button
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  disabled={plan.badge === "Próximamente"}
                >
                  {plan.badge === "Próximamente" ? "Muy pronto..." : "Comenzar ahora"}
                </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

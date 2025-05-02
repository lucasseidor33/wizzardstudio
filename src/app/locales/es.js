const translations = { 

navbar:{
    title:"Wizzard Studio",
    inicio:"Inicio",
    plans:"Servicios",
    clients:"Clientes",
    contact:"Contacto"
},
hero: {
    subtitle:"Diseño web,desarrolo a medida y branding creativo.",
    label:"Elevamos tu presencia digital con diseño y tecnologia"
},
caroussel:{
    title:"Nuestro trabajo",
    subtitle:"Creamos experiencias digitales excepcionales que transforman ideas en realidades impactantes.",
    projects:[
            {
            id: 1,
            title: "Caobas marketing agency",
            description: "Una tienda online totalmente responsive con carrito de compras.",
            media: "/video/project1.mp4",
            type: "video",
            link: "https://caobas.vercel.app",
            },
            {
            id: 2,
            title: "Mcstudio beauty salon",
            description: "Portfolio personal con transiciones animadas y diseño moderno.",
            media: "/video/project2.mp4",
            type: "video",
            link: "https://mcstudio-2ebq.vercel.app",
            },
        ],
        buttonProject:"Ver proyecto"
    },
cards:{
        title: "Planes de suscripcion",
        subtitle: "Elegi el plan que mas se adapte a tus necesidades",  
        plans: [
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
            
          ]
        },
contact:{
    title:"¿Listo para hechizar tu presencia digital? ",
    subtitle:"Hablemos por WhatsApp y demos el primer paso juntos.",  
    button:"Hablar por Whatsapp"
},
footer:{
  aboutus:"Sobre nosotros",
  description:"Brindamos servicios y productos de alto nivel para satisfacer las necesidades de nuestros clientes.",
  linkdesc:"Quick Links",
   home:"Inicio",
   clients:"Clientes",
   plans:"Servicios",
   contact:"Contacto",
    contactUs:"lucasaduranlopez@gmail.com",
    followUs:"Síguenos"
}

}

export default translations

const translations = {


    navbar:{
        title:"Wizzard Studio",
        inicio:"Home",
        plans:"Services",
        clients:"Clients",
        contact:"Contact"
    },
    hero: {
      subtitle: "Web design, custom development and creative branding.",
      label: "We elevate your digital presence with design and technology"
    },
    caroussel: {
      title: "Our Work",
      subtitle: "We create exceptional digital experiences that turn ideas into impactful realities.",
      projects: [
        {
          id: 1,
          title: "Caobas Marketing Agency",
          description: "A fully responsive online store with a shopping cart.",
          media: "/video/project1.mp4",
          type: "video",
          link: "https://caobas.vercel.app"
        },
        {
          id: 2,
          title: "Mcstudio Beauty Salon",
          description: "Personal portfolio with animated transitions and modern design.",
          media: "/video/project2.mp4",
          type: "video",
          link: "https://mcstudio-2ebq.vercel.app"
        }
      ],
      buttonProject: "View project"
    },
    cards: {
      title: "Subscription Plans",
      subtitle: "Choose the plan that best suits your needs",
      plans: [
        {
          name: "Basic Plan",
          description: "Ideal for small businesses",
          price: 400,
          features: [
            "Custom design tailored to your business identity.",
            "Integrated contact link (email or WhatsApp button).",
            "Social media links.",
            "Free hosting on Vercel."
          ],
          badge: null,
          tips: [
            "Perfect for testing the Wizzard Studio ecosystem without commitment.",
            "Recommended for freelancers or small catalog stores.",
            "You can upgrade to the Premium plan at any time.",
            "Modern and attractive visual components to present your information clearly and professionally."
          ],
          href: "https://wa.me/5493855079729?text=Hi,%20I'm%20contacting%20you%20from%20Wizzard%20Studio%20because%20I'm%20interested%20in%20starting%20with%20the%20Basic%20Plan%20for%20my%20website.%20I'm%20ready%20to%20take%20the%20first%20step!%20Can%20you%20guide%20me%20on%20the%20next%20steps?"
        },
        {
          name: "Premium Plan",
          description: "For growing businesses",
          price: 750,
          features: [
            "Includes everything from the basic plan",
            "News or blog section (optional)",
            "24/7 technical support",
            "Advanced integrations",
            "Custom reports",
            "Payment gateway.",
            "Custom domain"
          ],
          badge: "Popular",
          tips: [
            "Ideal for teams that need collaboration and automation.",
            "Advanced integrations include CRM, ERP and marketing tools.",
            "More than 80% of our clients choose this plan after 3 months of use."
          ],
          href: "https://wa.me/5493855079729?text=Hi,%20I'm%20contacting%20you%20from%20Wizzard%20Studio%20because%20I'm%20interested%20in%20starting%20with%20the%20Premium%20Plan%20for%20my%20website.%20I'm%20looking%20for%20a%20professional%20and%20complete%20solution.%20What%20are%20the%20next%20steps%20to%20get%20started?"
        },
        {
          name: "Custom Plan",
          description: "100% tailored to your needs and goals",
          price: "1000-1500",
          features: [
            "Includes everything from the premium plan",
            "Tailored design",
            "Custom features",
            "Strategic consulting"
          ],
          badge: "Flexible",
          tips: [
            "Ideal if you're looking for a unique solution tailored to your ideas and goals.",
            "The price is defined based on scope, complexity and required features.",
            "Tell us what you need and we’ll create a custom plan just for you, with no preset limits."
          ]
        }
      ]
    },
    contact: {
      title: "Ready to enchant your digital presence?",
      subtitle: "Let's talk on WhatsApp and take the first step together.",
      button: "Chat on Whatsapp"
    },
    footer: {
      aboutus: "We provide high-level services and products to meet our clients' needs.",
      description:"Brindamos servicios y productos de alto nivel para satisfacer las necesidades de nuestros clientes.",
      linkdesc:"Quick Links",
       home:"Home",
       clients:"Clients",
       plans:"Services",
       contact:"Contact",
        contactUs:"lucasaduranlopez@gmail.com",
        followUs:"Follow us"
    }
  }
  
  export default translations
  
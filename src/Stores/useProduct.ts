
import { create } from 'zustand';

type Product = {
    image: string;
    title: string;
    location: string;
    date: string;
    description: string;
    extra1: string;
    extra2: string;
    extra3: string;
    imageNo: string;
    tags: string[];
  };

  type ProductState = {
    products: Product[];
  };

const useProductStore = create<ProductState>(() => ({
  products: [
    {
        image: "/assets/image.svg",
        title: "Graceville Apartments",
        location: "Abuja, Nigeria",
        date: "Dec 20, 2024",
        description: "Designed and constructed a modern 10-unit apartment complex tailored for middle-income families, featuring energy-efficient materials and smart-home integration.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Business","Interior Design"]
    },
    {
        image: "/assets/image (1).svg",
        title: "The Blue Haven Villa",
        location: "Lekki, Lagos, Nigeria",
        date: "Nov 15, 2024",
        description: "Customized luxury villa with an open-plan design, high-end finishes, and eco-friendly landscaping, built for a private client.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Renovation","Decoration"]
    },
    {
        image: "/assets/image (2).svg",
        title: "Olive Grove Office Park",
        location: "Kano, Nigeria",
        date: "Oct 30, 2024",
        description: "Transformed a dilapidated industrial property into a state-of-the-art office park, complete with modern workspaces, a rooftop lounge, and renewable energy solutions.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Remodelling","Extension"]
    },
    {
        image: "/assets/image (3).svg",
        title: "Diamond Creek Estate",
        location: "Port Harcourt, Nigeria",
        date: "Sep 12, 2024",
        description: "Master-planned residential estate featuring 50 homes with customized interiors, recreational facilities, and a focus on sustainable urban living.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Interior Design","Business"]
    },
    {
        image: "/assets/image (4).svg",
        title: "Graceville Apartments",
        location: "Abuja, Nigeria",
        date: "Dec 20, 2024",
        description: "Designed and constructed a modern 10-unit apartment complex tailored for middle-income families, featuring energy-efficient materials and smart-home integration.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Business","Interior Design"]
    },
    {
        image: "/assets/image (5).svg",
        title: "The Blue Haven Villa",
        location: "Lekki, Lagos, Nigeria",
        date: "Nov 15, 2024",
        description: "Customized luxury villa with an open-plan design, high-end finishes, and eco-friendly landscaping, built for a private client.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Renovation","Decoration"]
    },
    {
        image: "/assets/image (6).svg",
        title: "Olive Grove Office Park",
        location: "Kano, Nigeria",
        date: "Oct 30, 2024",
        description: "Transformed a dilapidated industrial property into a state-of-the-art office park, complete with modern workspaces, a rooftop lounge, and renewable energy solutions.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Remodelling","Extension"]
    },
    {
        image: "/assets/image (7).svg",
        title: "Diamond Creek Estate",
        location: "Port Harcourt, Nigeria",
        date: "Sep 12, 2024",
        description: "Master-planned residential estate featuring 50 homes with customized interiors, recreational facilities, and a focus on sustainable urban living.",
        extra1: "/assets/extra1.svg",
        extra2: "/assets/extra2.svg",
        extra3: "/assets/extra3.svg",
        imageNo: "30+ images",
        tags: ["Interior Design","Business"]
    },
  ],

}));

export default useProductStore;
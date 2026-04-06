import { 
  BookOpen, Utensils, GraduationCap, Palette, Heart, 
  LucideIcon 
} from "lucide-react";

export interface ProgramFeature {
  text: string;
}

export interface ProgramData {
  slug: string;
  name: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  bgClass: string;
  textClass: string;
  description: string;
  fullDescription: string[];
  features: string[];
  impactStat?: {
    value: string;
    label: string;
  };
  scripture?: {
    text: string;
    reference: string;
  };
}

export const programsData: ProgramData[] = [
  {
    slug: "spiritual",
    name: "Spiritual Foundation",
    tagline: "Fostering faith and character development through the Gospel.",
    icon: BookOpen,
    color: "spiritual-blue",
    bgClass: "bg-spiritual-blue/10",
    textClass: "text-spiritual-blue",
    description: "Introduce children to the Gospel and provide spiritual mentorship to foster character and hope.",
    fullDescription: [
      "The Spiritual Foundation is the cornerstone of the Yakira Kids Network. We believe that every child deserves to know they are loved by God and have a purpose in His kingdom.",
      "Through our mentorship programs, we connect children with spiritual leaders who guide them through the teachings of the Bible, helping them build a strong moral and ethical foundation.",
      "We focus on character development, prayer, and worship, ensuring that as children grow, they carry the light of Christ into their communities."
    ],
    features: [
      "Weekly Bible study sessions",
      "One-on-one mentorship with trained spiritual leaders",
      "Character development workshops",
      "Prayer and worship gatherings"
    ],
    impactStat: { value: "2,450", label: "Children Mentored" },
    scripture: { 
      text: "Start children off on the way they should go, and even when they are old they will not turn from it.",
      reference: "Proverbs 22:6"
    }
  },
  {
    slug: "nutritional",
    name: "Monthly Sustenance",
    tagline: "Consistent, nutritious meals for children in underserved regions.",
    icon: Utensils,
    color: "life-green",
    bgClass: "bg-life-green/10",
    textClass: "text-life-green",
    description: "Implement a 'Monthly Sustenance Program' for consistent, nutritious meals in underserved regions.",
    fullDescription: [
      "No child can focus on their future while their stomach is empty. Our Monthly Sustenance Program ensures that children in the most underserved regions have access to daily nutritious meals.",
      "We partner with local providers to ensure that the food is not only plentiful but also balanced and culturally appropriate.",
      "Beyond just feeding, we educate children and their caregivers about nutrition and health, creating a sustainable cycle of wellness."
    ],
    features: [
      "Nutritious meals provided daily",
      "Food security for families",
      "Nutrition education workshops",
      "Community meal programs"
    ],
    impactStat: { value: "147,890", label: "Meals Served" },
    scripture: { 
      text: "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink.",
      reference: "Matthew 25:35"
    }
  },
  {
    slug: "educational",
    name: "Educational Empowerment",
    tagline: "Full scholarships providing tuition, books, and uniforms.",
    icon: GraduationCap,
    color: "hope-orange",
    bgClass: "bg-hope-orange/10",
    textClass: "text-hope-orange",
    description: "Provide full scholarships (tuition, books, uniforms) for formal academic learning.",
    fullDescription: [
      "Education is the key to breaking the cycle of poverty. Our Educational Empowerment program removes the barriers that keep children out of school.",
      "We provide full scholarships that cover everything from tuition fees to the smallest pencil. We ensure every child has a uniform that they can wear with pride.",
      "Our support doesn't end at the school gates. We provide tutoring and academic support to ensure every Yakira student has the best possible chance of success."
    ],
    features: [
      "Complete scholarship coverage",
      "School supplies and uniforms provided",
      "Tutoring and academic support",
      "University pathway guidance"
    ],
    impactStat: { value: "485", label: "Scholarships Awarded" },
    scripture: { 
      text: "The heart of the discerning acquires knowledge, for the ears of the wise seek it out.",
      reference: "Proverbs 18:15"
    }
  },
  {
    slug: "creative",
    name: "Creative Skill Hubs",
    tagline: "Vocational training in trades, arts, and digital skills for life.",
    icon: Palette,
    color: "mentor-purple",
    bgClass: "bg-mentor-purple/10",
    textClass: "text-mentor-purple",
    description: "Establish 'Creative Skill Hubs' focusing on trades, arts, and digital skills.",
    fullDescription: [
      "Every child has unique talents that can become their livelihood. Creative Skill Hubs provide the environment and tools for children to discover and hone these skills.",
      "From traditional trades like tailoring and carpentry to modern digital skills like graphic design and coding, we equip children with practical abilities for the 21st century.",
      "We also focus on the arts as a form of trauma-informed therapy, helping children express their stories and heal through creativity."
    ],
    features: [
      "Vocational training in essential trades",
      "Arts and music education",
      "Digital skills and computer literacy",
      "Entrepreneurship mentorship"
    ],
    impactStat: { value: "12", label: "Skill Hubs Established" },
    scripture: { 
      text: "Commit to the Lord whatever you do, and he will establish your plans.",
      reference: "Proverbs 16:3"
    }
  },
  {
    slug: "welfare",
    name: "Welfare & Dignity",
    tagline: "Providing essential clothing and hygiene items with dignity.",
    icon: Heart,
    color: "donor-teal",
    bgClass: "bg-donor-teal/10",
    textClass: "text-donor-teal",
    description: "Provide quality clothing and personal items to ensure children represent themselves with dignity.",
    fullDescription: [
      "Dignity is a fundamental human right. Our Welfare & Dignity program ensures that every child has the basic items they need to feel respected and comfortable.",
      "We provide high-quality clothing, personal hygiene kits, and essential items that are often out of reach for displaced families.",
      "By ensuring children look and feel their best, we help build their self-worth and confidence, allowing them to engage fully in school and their community."
    ],
    features: [
      "Quality clothing and footwear provision",
      "Personal hygiene and dignity kits",
      "Self-worth and identity workshops",
      "Community representation support"
    ],
    impactStat: { value: "5,000", label: "Dignity Kits Distributed" },
    scripture: { 
      text: "She is clothed with strength and dignity; she can laugh at the days to come.",
      reference: "Proverbs 31:25"
    }
  }
];

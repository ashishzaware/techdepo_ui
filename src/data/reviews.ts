import type { Review } from "@/types";

/**
 * Genuine customer reviews, supplied directly by the business owner.
 * No star rating is shown for any of these since none was given — see
 * `Review.rating` (optional) and ReviewCard, which hides the star row
 * entirely rather than assuming 5 stars.
 */
export const reviews: Review[] = [
  {
    id: "sanket-zanzad",
    customerName: "Sanket Zanzad",
    location: "Ahilyanagar — MRF Tyre Distributor",
    lang: "mr",
    review:
      "TechDepo कडून आमच्या ठिकाणी IP CCTV कॅमेऱ्यांचे सेटअप करून घेतले. कॅमेऱ्यांची क्वालिटी चांगली असून इंस्टॉलेशनचे काम व्यवस्थित आणि वेळेत पूर्ण केले. मोबाईलवरून CCTV पाहण्याबाबतही टीमने योग्य मार्गदर्शन केले. एकूणच सर्व्हिस आणि सपोर्ट खूप चांगला मिळाला.",
    serviceOrProduct: "CCTV Setup",
    isSample: false,
  },
  {
    id: "mauli-thube",
    customerName: "Mauli Thube",
    review:
      "TechDepo provided a very good CCTV setup for our requirement. The installation was completed properly and the team explained the system and camera access clearly. The overall service was smooth and professional. Happy with the work and support provided.",
    serviceOrProduct: "CCTV Setup",
    isSample: false,
  },
  {
    id: "upsc-guide-tuition-classes",
    customerName: "UPSC Guide Tuition Classes",
    review:
      "TechDepo handled the network and surveillance setup for our classes very well. They installed a 22-camera IP CCTV system along with the required networking setup. The team planned the installation properly and completed the work neatly without disturbing our regular classes. Good technical support and service.",
    serviceOrProduct: "Network & Surveillance Setup",
    isSample: false,
  },
  {
    id: "sandip-bade",
    customerName: "Sandip Bade",
    location: "Chairman, Periwinkle Society, Wagholi",
    review:
      "We got our CCTV and security system setup done through TechDepo at Periwinkle Society, Wagholi. The project included 32 IP CCTV cameras along with lift CCTV and lift siren setup. The team handled the installation professionally and provided proper guidance during the setup. Overall, we are satisfied with the quality of work and support from TechDepo.",
    serviceOrProduct: "CCTV & Security System Setup",
    isSample: false,
  },
  {
    id: "kamlakar-date",
    customerName: "Kamlakar Date",
    location: "Hira Enterprise",
    lang: "mr",
    review:
      "आमच्या Hira Enterprise साठी Desktop आणि Billing Setup चे काम TechDepo कडून करून घेतले. Desktop setup सोबत billing software ची installation आणि configuration व्यवस्थित करून दिली. वापरण्यास सोपे billing system मिळाले आणि टीमने प्रत्येक गोष्ट व्यवस्थित समजावून सांगितली. कामाची गुणवत्ता आणि सर्व्हिस दोन्ही खूप चांगली आहे.",
    serviceOrProduct: "Desktop & Billing Setup",
    isSample: false,
  },
  {
    id: "sanket-zaware",
    customerName: "Sanket Zaware",
    location: "Sanket Kirana Store",
    lang: "mr",
    review:
      "माझ्या किराणा दुकानासाठी TechDepo कडून Desktop आणि Billing Software Setup करून घेतले. Billing करणे आता खूप सोपे आणि जलद झाले आहे. Product entry, बिल तयार करणे आणि रोजच्या विक्रीचा हिशोब ठेवणे सहज शक्य झाले. TechDepo टीमने software वापरण्याबाबत छान मार्गदर्शन केले. किराणा दुकानासाठी खूप उपयोगी billing system आहे.",
    serviceOrProduct: "Desktop & Billing Software Setup",
    isSample: false,
  },
  {
    id: "kiran-auti",
    customerName: "Kiran Auti",
    location: "Hotel Raya",
    lang: "mr",
    review:
      "Hotel Raya साठी TechDepo चे Hotel Billing Software वापरत आहोत. बिलिंगचे काम सोपे आणि व्यवस्थित झाले आहे. रोजच्या व्यवहारांचा हिशोब ठेवणे आणि बिल तयार करणे आता अधिक सोयीचे झाले आहे. Software वापरण्यास सोपे आहे आणि TechDepo टीमकडून चांगला support मिळतो. Hotel billing साठी TechDepo ची service चांगली आहे.",
    serviceOrProduct: "Hotel Billing Software",
    isSample: false,
  },
];

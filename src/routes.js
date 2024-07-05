import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";


export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },

  {
    exact: true,
    path: "/image-component",
    layout: HomeLayout,
    component: lazy(() => import("src/component/ImageComponent")),
  },
  {
    exact: true,
    path: "/connect",
    layout: HomeLayout,
    component: lazy(() => import("src/component/Connect")),
  },

  {
    exact: true,
    path: "/about-us",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MedboundTimes/About")),
  },
  {
    exact: true,
    path: "/dress-collection",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/DressCollection/index")),
  },
  {
    exact: true,
    path: "/product-detail",

    layout: HomeLayout,
    component: lazy(() => import("src/component/ProductDetail")),
  },
  {
    exact: true,
    path: "/medboundlist-internship",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MedboundTimes/Internships")),
  },
  {
    exact: true,
    path: "/medboundlist-career",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/MedboundTimes/TrainingMain")),
  },
  {
    exact: true,
    path: "/internship-by-medbound",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/UpcomingWebinars/InternshipByMedbound")
    ),
  },
  {
    exact: true,
    path: "/upcomming-webinar",

    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/UpcomingWebinars/Upcomingweb")
    ),
  },
  {
    exact: true,
    path: "/learning-tutorails",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/LearningPage/Tutorialvedio")),
  },
  {
    exact: true,
    path: "/mentors",

    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/UpcomingWebinars/Mentorsection")
    ),
  },
  {
    exact: true,
    path: "/alumini",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UpcomingWebinars/Alumini")),
  },
  {
    exact: true,
    path: "/upcomming-event",

    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/UpcomingWebinars/UpcommingEvent")
    ),
  },
  {
    exact: true,
    path: "/blogs",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UpcomingWebinars/Blogs")),
  },
  {
    exact: true,
    path: "/blog-view",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/UpcomingWebinars/BlogView")),
  },
  {
    exact: true,
    path: "/help-center",

    component: lazy(() => import("src/views/pages/HelpCenter/HelpCenter")),
  },

  {
    exact: true,
    path: "/health-leadership",

    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/HealthLeadership")
    ),
  },
  {
    exact: true,
    path: "/gallery",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/GallerySection")),
  },
  {
    exact: true,
    path: "/exam-module",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/EducationCell/ExamModule")),
  },
  {
    exact: true,
    path: "/flash-card",

    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/FlashPage/FlashCard")),
  },
  {
    exact: true,
    path: "/flash-card-list",

    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/FlashPage/Flipcardcomponent")
    ),
  },

  {
    exact: true,
    path: "/education-cell",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/EducationCell")),
  },
  {
    exact: true,
    path: "/tutorial",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/LearningPage/index")),
  },
  {
    exact: true,
    path: "/flash-category",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/FlashPage/FlashCategory")),
  },
  {
    exact: true,
    path: "/medbound-list",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/MedboundList/AboutMedboundList")
    ),
  },
  {
    exact: true,
    path: "/medbound-program",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/MedboundList/CampusAmbassadorProgram")
    ),
  },
  {
    exact: true,
    path: "/physical-clubs",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/PhysicianClub")
    ),
  },
  {
    exact: true,
    path: "/biotech-clubs",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/PhysicianClub")
    ),
  },
  {
    exact: true,
    path: "/dental-clubs",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/PhysicianClub")
    ),
  },
  {
    exact: true,
    path: "/pharma-clubs",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/PhysicianClub")
    ),
  },
  {
    exact: true,
    path: "/creative-club",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/PhysicianClub")
    ),
  },
  {
    exact: true,
    path: "/terms-and-conditions",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AboutUs/TermsAndConditions")),
  },
  {
    exact: true,
    path: "/our-stories",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AboutUs/OurStories")),
  },
  {
    exact: true,
    path: "/testnomial",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AboutUs/TestimonialsAbout")),
  },
  {
    exact: true,
    path: "/privacy-policy",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/AboutUs/PrivacyPolicy")),
  },

  {
    exact: true,
    path: "/men-fourm",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/MenForum")
    ),
  },
  {
    exact: true,
    path: "/women-fourm",
    layout: HomeLayout,
    component: lazy(() =>
      import("src/views/pages/ForumsAndSocialClubs/WomenForum")
    ),
  },

  {
    exact: true,
    path: "/faq",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/FAQs/Faqs")),
  },
  {
    exact: true,
    path: "/shipping-return",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/ShippingReturn/index")),
  },
  {
    exact: true,
    path: "/store-locator",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/StoreLocator/index")),
  },
  {
    exact: true,
    path: "/get-in-touch",
    component: lazy(() => import("src/views/pages/HelpCenter/GetInTouch")),
  },
  {
    exact: true,
    path: "/help-center-page",
    layout: HomeLayout,

    component: lazy(() =>
      import("src/views/pages/HelpCenter/HelpIndexComponent")
    ),
  },

  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  // ------------Admin-----------------

  {
    component: () => <Redirect to="/404" />,
  },
];

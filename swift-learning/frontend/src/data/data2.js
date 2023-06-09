import img1 from "../data/images/IMAGEcor.png"
import img2 from "../data/images/IMAGEpro.png"
import img3 from "../data/images/IMAGEpco.png"

const courses = [
    {
        id:1,
        img: img1,
        alt: "loading...",
        head:"Self-Paced Courses",
        amount: "$14.99 /month",
        list: [
         "Access all Recorded courses",
         "Certification"
        ],
        action: "Explore Courses"
    },
    {
        id: 2,
        img: img2,
        alt: "loading...",
        head: "Incubator Program",
        amount: "$149.99 /Program",
        list: [
            "5-7 months intensive training",
            "Skill-to-job program",
            "3 months internship placements"
        ], 
        action: "Explore Courses"
    },
    {
        id: 3,
        img: img3,
        alt: "loading...",
        head: "Personal Coaching",
        amount: "$249.99 /Cohort",
        list: [
            "1:1 Coaching",
            "Decide what to learn with the instructor",
            "Flexible class time"
        ], 
        action: "Book a session"
    },
    {
        id: 4,
        img: img3,
        alt: "loading...",
        head: "Personal Coaching",
        amount: "$249.99 /Cohort",
        list: [
            "1:1 Coaching",
            "Decide what to learn with the instructor",
            "Flexible class time"
        ],
        action: "Book a session"
    }
]

export default courses;
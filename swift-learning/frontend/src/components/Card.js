export default function Card({courses}) {
  return (
    <div>
      {
        courses.map((course) => (
            <>
                <img src={course.img} alt={course.alt} />
                <h3>{course.head}</h3>
                <h4>{courses.amount}</h4>
            </>
        ))
      }
    </div>
  )
}

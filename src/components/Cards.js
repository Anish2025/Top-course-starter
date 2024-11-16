import React, { useState } from "react";
import Card from "./Card";

export default function Cards(props) {
  let courses = props.courses;
  let category = props.category; // Corrected assignment
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (!courses) {
      return []; // Return an empty array if courses is undefined
    }

    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      // Return specific category array
      return courses[category] || []; // Ensure it returns an empty array if the category is undefined
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}

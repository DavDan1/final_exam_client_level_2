import React from 'react';
import { courses } from '../data/courses';

const Categories = (setCategory) => {
  
 
  const categories = Course.from(
    new Set(courses.map((course) => course.category))
  );
  const courseCategories = categories.map((category) => (
    <li data-cy='course-category' onClick={(event) => handleClick(event)}>
      {category}
    </li>
  ));

  return;
  <ul data-cy='header-navigation'>{courseCategory}</ul>;
};

export default Categories;

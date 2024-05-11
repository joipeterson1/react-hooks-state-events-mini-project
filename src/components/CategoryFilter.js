import React from "react";

function CategoryFilter({categories, tasks, handleCategory}) {

const categoryButtons = categories
.map((category) => {
  return (
<button  key={category} 
value={category}
onClick={handleCategory}
className={category ? 'selected' : null}
> {category}</button>
)
})
console.log(categoryButtons)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

export const mainCategories = Object.freeze([
  "All",
  "Academic/Career",
  "Campus Communities",
  "Constituent",
  "Councils & Collectives",
  "Hobby",
  "Indigenous",
  "International/Cultural",
  "Political",
  "Religious/Spiritual",
  "Sports & Fitness",
  "Volunteering"
]);

export const subCategoryMappings = Object.freeze({
  "Academic/Career": [
    "Arts, Design & Architecture",
    "Business & Law",
    "Engineering & Technology",
    "Science & Medicine"
  ],
  "Constituent": [
    "College",
    "Degree",
    "Postgraduate"
  ],
  "Hobby": [
    "Appreciation/Special Interests",
    "Creative & Performing Arts",
    "Food & Drink",
    "Games",
    "Personal Development"
  ],
  "Sports & Fitness": [
    "Fitness & Recreation",
    "Individual Sports",
    "Martial Arts",
    "Team Sports"
  ],
  "Volunteering": [
    "Charity",
    "Projects"
  ]
});

export function resolveCategoryValues(categoryPath) {
  const [mainCategory, subCategory] = categoryPath;
  // "All" = no categories selected
  if (mainCategory == "All") {
    return [];
  }
  // Specific sub-category selected
  if (subCategory) {
    return [subCategory];
  }
  // Main category selected - has sub-categories
  if (mainCategory in subCategoryMappings) {
    return [...subCategoryMappings[mainCategory]];
  }
  // Main category selected - no sub-categories
  return [mainCategory];
}
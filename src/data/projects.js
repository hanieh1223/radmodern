// Add verified portfolio entries here. Do not publish invented client names or results.
export const projects = [];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

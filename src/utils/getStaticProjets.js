// src/utils/getStaticProjets.js
import projets from '../data/projets.json';

export function getStaticProjetsPaths() {
  return projets.map((projet) => ({
    params: { slug: projet.slug }
  }));
}

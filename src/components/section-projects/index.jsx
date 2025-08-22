import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          role={project.role}
          stack={project.stack}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;

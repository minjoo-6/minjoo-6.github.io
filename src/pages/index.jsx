import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionAward from '../components/section-award';
import SectionSkills from '../components/section-skills';
import SectionCertification from '../components/section-certification'
import SEO from '../components/seo';

const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const awards = get(data, 'site.siteMetadata.awards', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const certification = get(data, 'site.siteMetadata.certifications', false)

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionAbout about={about} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {experience && experience.length && (<SectionExperience experience={experience} />)}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {awards && awards.length && (
                <SectionAward awards={awards} />
            )}

      {certification && certification.length && <SectionCertification certifications={certification} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        github
        projects {
          name
          description
          role
          stack
          year
          link
        }
        experience {
          name
          description
          link
        }
        awards {
          name
          year
          description
        }
        skills {
          name
          description
        }
        certifications {
            name
            institution
            year
            description
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

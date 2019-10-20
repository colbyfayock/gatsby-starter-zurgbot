import { useSiteMetadata } from 'hooks';
import { mergeMetaProperties } from 'lib/meta';

function usePageMeta( settings = {}) {
  const siteMetadata = useSiteMetadata();

  const defaultTitle = siteMetadata.title;
  const defaultDescription = siteMetadata.description;
  const defaultLang = siteMetadata.lang;
  const defaultType = siteMetadata.siteType;

  const titleTemplate = defaultTitle ? `%s - ${defaultTitle}` : '%s';

  const meta = {
    htmlAttributes: {
      lang: defaultLang
    },
    defaultTitle,
    titleTemplate,
    meta: [
      {
        name: 'description',
        content: defaultDescription
      },
      {
        name: 'og:title',
        content: defaultTitle
      },
      {
        name: 'og:description',
        content: defaultDescription
      },
      {
        name: 'og:type',
        content: defaultType
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: defaultTitle
      },
      {
        name: 'twitter:description',
        content: defaultDescription
      }
    ]
  };

  return {
    meta: mergeMetaProperties( meta, settings )
  };
}

export default usePageMeta;

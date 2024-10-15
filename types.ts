export interface HomePageData {
    pages: {
      nodes: {
        homepage: {
          banners: {
            bannerImage: {
              node: {
                sourceUrl: string;
              };
            };
            bannersTitle: string;
            bannerDescription: string;
            bannerButton: {
              title: string;
              url: string;
              target: string;
            };
          }[];
          homeAboutTitle: string;
          homeAboutSubtitle: string;
          homeAboutButton: {
            target: string;
            title: string;
            url: string;
          };
          homeAboutVideoImage: {
            node: {
              sourceUrl: string;
            };
          };
          homeAboutVideoUrl: string;
          homeAboutDescription: string;
          homeCategoryTitle: string;
          homeCategorySubtitle: string;
          homeServicesTitle: string;
          homeServicesSubtitle: string;
          homeColoursTitle: string;
          homeColoursSubtitle: string;
          homeColoursButton: {
            target: string;
            title: string;
            url: string;
          };
          homeJoinBackgroundImage: {
            node: {
              sourceUrl: string;
            };
          };
          homeJoinTitle: string;
          homeJoinSubtitle: string;
          homeJoinButton: {
            target: string;
            title: string;
            url: string;
          };
          homeJoinDescription: string;
          blogTitle: string;
          blogSubtitle: string;
          categories: {
            link: string;
            title: string;
            image: {
              node: {
                sourceUrl: string;
              };
            };
          }[];
        };
        seo: {
          canonical: string;
          metaKeywords: string;
          metaDesc: string;
          title: string;
          opengraphType: string;
          opengraphSiteName: string;
          opengraphTitle: string;
          opengraphDescription: string;
          opengraphUrl: string;
          schema: {
            raw: string;
          };
          opengraphImage: {
            mediaItemUrl: string;
          };
        };
      }[];
    };
  }
  
import gql from 'graphql-tag';

export const homePageQuery = gql`
    query {
    kitchenCarouselCollection(preview: false) {
        items {
        sys{
            id
        }
        title
        descriptions
        image {
            url
            title
        }
        }
    }
}
`;
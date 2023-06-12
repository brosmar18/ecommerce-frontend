import sanityClient, { SanityClient } from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

export const client = SanityClient({
    projectId: 'xziwqyjm',
    dataset: 'production',
    apiVersion: '2023-06-11',
    useDcn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

import sanityClient, { SanityClient } from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

const client = SanityClient({
    projectId: '',
    dataset: '',
    apiVersion: '',
    useDcn: true,
    token: ''
})

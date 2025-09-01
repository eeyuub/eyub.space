import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  const requestUrl = new URL(request.url);
  const imageUrl = requestUrl.searchParams.get('url');

  if (!imageUrl) {
    return new Response('Image URL is missing', { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new Response('Failed to fetch the image', { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'application/octet-stream';

    return new Response(imageBuffer, {
      headers: { 'Content-Type': contentType },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return new Response('An error occurred while fetching the image', { status: 500 });
  }
};

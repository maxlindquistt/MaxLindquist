import { NextResponse } from 'next/server';

export async function GET() {
  const username = 'maxlindquistt';
  
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }

    const repos = await response.json();

    return NextResponse.json(repos);
  } catch (error) {
    console.error('Failed to fetch GitHub repositories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
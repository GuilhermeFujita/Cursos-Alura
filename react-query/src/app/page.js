'use client';

import { useQuery, useQueries } from '@tanstack/react-query';
import { CardPost } from '@/components/CardPost';
import { Spinner } from '@/components/Spinner';
import styles from './page.module.css';
import Link from 'next/link';

const fetchPosts = async ({ page }) => {
  const results = await fetch(`http://localhost:3000/api/posts?page=${page}`);
  const data = await results.json();
  return data;
};

export const fetchPostRating = async ({ postId }) => {
  const results = await fetch(
    `http://localhost:3000/api/post?postId=${postId}`
  );
  const data = results.json();
  return data;
};

export default function Home({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const searchTerm = searchParams?.q;

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: () => fetchPosts({ page: currentPage }),
    staleTime: 2000,
  });

  const postRatingQueries = useQueries({
    queries:
      posts?.data.length > 0
        ? posts.data.map((post) => ({
            queryKey: ['postHome', post.id],
            queryFn: () => fetchPostRating({ postId: post.id }),
            enabled: !!post.id,
          }))
        : [],
  });

  const ratingsAndCartegoriesMap = postRatingQueries?.reduce((acc, query) => {
    if (!query.isPending && query.data && query.data.id) {
      acc[query.data.id] = query.data;
    }
    return acc;
  }, {});

  return (
    <main className={styles.grid}>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      {posts?.data?.map((post) => (
        <CardPost
          key={post.id}
          post={post}
          rating={ratingsAndCartegoriesMap?.[post.id]?.rating}
          category={ratingsAndCartegoriesMap?.[post.id]?.category}
          isFetching={isFetching}
        />
      ))}
      <div className={styles.links}>
        {posts?.prev && (
          <Link
            href={{
              pathname: '/',
              query: { page: posts?.prev, q: searchTerm },
            }}
          >
            Página anterior
          </Link>
        )}
        {posts?.next && (
          <Link
            href={{
              pathname: '/',
              query: { page: posts?.next, q: searchTerm },
            }}
          >
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}

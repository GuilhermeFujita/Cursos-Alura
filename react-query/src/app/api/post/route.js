import db from "../../../../prisma/db";

export async function GET(request) {
  const postId = request.nextUrl.searchParams.get("postId");

  try {
    // This represents a sample database or dataset
    const posts = [
      {
        id: 12,
        likes: 5,
        title: "Sass: Simplifying CSS",
        category: "Front-end",
      },
      {
        id: 11,
        likes: 3,
        title: "Introduction to TypeScript",
        category: "Front-end",
      },
      {
        id: 10,
        likes: 8,
        title: "Vue.js for Beginners",
        category: "Front-end",
      },
      { id: 9, likes: 2, title: "Angular: First Steps", category: "Front-end" },
      {
        id: 8,
        likes: 9,
        title: "Introdução ao TypeScript",
        category: "Front-end",
      },
      {
        id: 7,
        likes: 7,
        title: "Webpack: Um Guia para Iniciantes",
        category: "Front-end",
      },
      {
        id: 5,
        likes: 5,
        title: "CSS Grid na Prática",
        category: "Front-end",
      },
      {
        id: 6,
        likes: 6,
        title: "Gerenciamento de Estado com Redux",
        category: "Front-end",
      },
      {
        id: 4,
        likes: 4,
        title: "Sass: Simplificando o CSS",
        category: "Front-end",
      },
    ];

    // Find the post by id
    const post = posts.find((p) => p.id === parseInt(postId));

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return Response.json({
      id: post.id,
      rating: post.likes,
      category: post.category,
    });
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching post:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

import db from "../../../../../../prisma/db";

// export async function GET(_request, { params }) {
//   const replies = await db.comment.findMany({
//     where: {
//       parentId: parseInt(params.id),
//     },
//     include: {
//       author: true,
//     },
//   });
//   return Response.json(replies);
// }

let failCount = 0;

export async function GET(request, { params }) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (failCount < 4 && slug === "sass-simplificando-o-css") {
    failCount += 1;
    throw new Error("Simulated server error"); // Forçar falha
  }

  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(params.id),
    },
    include: {
      author: true,
    },
  });

  failCount = 0;
  return Response.json(replies);
}

export async function POST(request) {
  try {
    // Parse the incoming request data
    const formData = await request.json();
    const { comment: parent, text } = formData;

    if (!text) {
      // If no text is provided, return an error
      return new Response(
        JSON.stringify({ message: "Text field is required." }),
        {
          status: 400, // Bad Request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Retrieve the author from the database
    const author = await db.user.findFirst({
      where: {
        username: "anabeatriz_dev",
      },
    });

    // Check if author exists
    if (!author) {
      return new Response(JSON.stringify({ message: "Author not found." }), {
        status: 404, // Not Found
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const post = await db.post.findFirst({
      where: {
        id: parent.postId,
      },
    });

    await db.comment.create({
      data: {
        text,
        authorId: author.id,
        postId: post.id,
        parentId: parent?.parentId ?? parent.id,
      },
    });

    // Successfully created the comment, return a success message
    return new Response(
      JSON.stringify({ message: "Resposta adicionada com sucesso", parent }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Catch and return any error that occurs during the operation
    console.error("Falha ao responder o comment:", error);
    return new Response(
      JSON.stringify({
        message: "Falha ao responder o comment",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

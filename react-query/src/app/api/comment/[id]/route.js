import db from "../../../../../prisma/db";

export async function POST(request) {
  try {
    // Parse the incoming request data
    const formData = await request.json();
    const { id, text } = formData;

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

    // Create a new comment in the database
    const comment = await db.comment.create({
      data: {
        text: text,
        authorId: author.id,
        postId: id,
      },
    });

    // Successfully created the comment, return a success message
    return new Response(
      JSON.stringify({ message: "Comentário adicionado com sucesso", comment }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Catch and return any error that occurs during the operation
    console.error("Failed to post comment:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to post comment",
        error: error.message,
      }),
      {
        status: 500, // Internal Server Error
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

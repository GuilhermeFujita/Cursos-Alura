import db from "../../../../prisma/db";

// Function to simulate a delay
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export async function POST(request) {
  const { slug } = await request.json();

  // Simulate a delay before executing the update
  await delay(50);

  // Introduce a condition to simulate an error
  if (slug === "vuejs-para-iniciantes") {
    // Assuming 'error-slug' triggers an error
    return new Response(
      JSON.stringify({ message: "Simulated error: Invalid slug" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    await db.post.update({
      where: {
        slug,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });

    return new Response(
      JSON.stringify({ message: "Thumbs up incremented successfully!" }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Catch any database or other errors and return an error response
    console.error("Failed to increment likes:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to increment likes",
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

import db from "../../../../prisma/db";
import logger from "@/logger";

export async function GET(request) {
  const page = parseInt(request.nextUrl.searchParams.get("page"));
  const searchTerm = request.nextUrl.searchParams.get("searchTerm");

  try {
    const where = {};

    if (searchTerm !== "undefined" && searchTerm?.length > 0) {
      where.title = {
        contains: searchTerm,
        mode: "insensitive",
      };
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({ where });

    const totalPages = Math.ceil(totalItems / perPage);
    const prev = page > 1 ? page - 1 : null;
    const next = page < totalPages ? page + 1 : null;

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: "desc" },
      include: {
        author: true,
        comments: true,
      },
    });

    return Response.json({ data: posts, prev, next });
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev: null, next: null };
  }
}

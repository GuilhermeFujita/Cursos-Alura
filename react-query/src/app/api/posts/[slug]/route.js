// pages/api/posts/[slug].js
import db from "../../../../../prisma/db";
import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

export async function GET(request) {
  const slug = request.nextUrl.pathname.split("/").pop(); // Pega o slug do URL

  try {
    const post = await db.post.findUnique({
      where: {
        slug,
      },
      include: {
        author: true,
        comments: {
          include: {
            author: true,
            children: {
              include: {
                author: true,
              },
            },
          },
          where: {
            parentId: null,
          },
        },
      },
    });

    if (!post) {
      // Retorna uma resposta 404 se não encontrar o post
      return new Response(
        JSON.stringify({
          message: `Post com o slug '${slug}' não foi encontrado`,
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const processedContent = await remark().use(html).process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml;

    // Retorna o post processado
    return new Response(JSON.stringify(post), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    logger.error(`Falha ao obter o post com o slug: ${slug}`, { error });
    // Retorna uma resposta 500 em caso de erro
    return new Response(
      JSON.stringify({ message: "Erro interno do servidor" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

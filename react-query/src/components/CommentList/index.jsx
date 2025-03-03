import { Comment } from "../Comment";
import { ReplyModal } from "../ModalReply";
import { Replies } from "../Replies";
import styles from "./commentlist.module.css";

export const CommentList = ({ comments, slug }) => {
  return (
    <section className={styles.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment comment={comment} key={comment.id} />
            <ReplyModal comment={comment} />
            <Replies comment={comment} slug={slug} />
          </li>
        ))}
      </ul>
    </section>
  );
};

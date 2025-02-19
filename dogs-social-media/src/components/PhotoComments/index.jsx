import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';
import './styles.css';

const PhotoComments = props => {
  //exibe comentários somente para usuários logados
  const { userIsLogged } = useContext(UserContext);

  // definimos em uma função de callback um estado inicial que irá executar apenas uma vez
  const [comments, setComments] = useState(() => props.comments);

  return (
    <>
      <ul className="comment-list">
        {comments &&
          comments.map(comment => (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          ))}
      </ul>

      {/* passamos a função setComments para poder atualizar de forma
        automatica a visualização dos comentários na lista de comentários */}
      {userIsLogged && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;

import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm';
import './styles.css';

const PhotoComments = props => {
  //exibe comentários somente para usuários logados
  const { userIsLogged } = useContext(UserContext);

  // definimos em uma função de callback um estado inicial que irá executar apenas uma vez
  const [comments, setComments] = useState(() => props.comments);

  // com o useRef criamos a possibilidade de comunicar diretamente com o componente que desejamos
  const commentRef = useRef(null);

  // com o useEffect para que através da referência atual do componente que
  // fizemos referencia com o useRef, possamos aplicar alguma interação com ele
  // aplicaremos esse efeito, toda a vez que os comentários mudarem
  useEffect(() => {
    // com o scrollTop estamos indicando que desejamos fazer o scroll para o topo desse componente
    // e passmos como valor pra ele, o valor obtido através do scrollHeight
    // e com o scrollHeight estamos indicando o final do componente (que nesse caso é o último item do li onde estão os comentários)
    commentRef.current.scrollTop = commentRef.current.scrollHeight;
  }, [comments]);

  return (
    <>
      {/* indica que queremos fazer referência a esse componente */}
      <ul ref={commentRef} className="comment-list">
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

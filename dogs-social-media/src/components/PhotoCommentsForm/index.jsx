import { useState } from 'react';
import Textarea from '../Textarea';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../api/commentsEndpoints';
import { getToken } from '../../utilities/utils';
import Send from '../../assets/send.svg?react';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { fetchError, request } = useFetch();

  function handleChange({ target }) {
    setComment(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const token = getToken();
    const { url, options } = COMMENT_POST(id, token, { comment });

    const { response, json } = await request(url, options);
    if (response.ok) {
      // se a postagem de um novo comentário foi bem sucedida
      // passamos para o estado dos comentários por meio de
      //  um callback os comentários antigos + os comentários novos
      setComments(comments => [...comments, json]);

      // limpamos o textarea
      setComment('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Textarea placeholder="comment..." id={comment} name={comment} onChange={handleChange} value={comment} />

        <button>
          <Send />
        </button>

        {fetchError && <Error error={fetchError} />}
      </form>
    </>
  );
};

export default PhotoCommentsForm;

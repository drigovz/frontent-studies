import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';
import { validationType } from '../utilities/enums';
import { PHOTO_POST } from '../api/photoEndpoints';
import { getToken } from '../utilities/utils';
import Input from '../components/Input';
import BrowserTab from '../components/BrowserTab';
import Error from '../components/Error';
import './UserPhotoPost.css';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm(validationType.number);
  const age = useForm(validationType.number);
  // gerenciamos o arquivo em um  state
  const [img, setImg] = useState({});
  const { data, loading, fetchError, request } = useFetch();
  const navigate = useNavigate();

  // usamos o useEffect para jogar o usuário para o feed de postagem de fotos
  // quando o usuário enviar os dados, ou seja, quando o estado de data mudar
  useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    // como estamos enviando um arquivo, precisamos criar um objeto FormData
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const token = getToken();
    const { url, options } = PHOTO_POST(formData, token);
    await request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      // o preview é uma pré visualização do arquivo que está sendo enviado
      // e com a função URL.createObjectURL, podemos criar uma URL para o arquivo
      preview: URL.createObjectURL(target.files[0]),
      // no valor zero está o arquivo que está sendo enviado
      raw: target.files[0],
    });
  }

  return (
    <section className="user-photo-post animeLeft">
      <BrowserTab title="Poste your photo" description="Poste your photo" />

      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" id="name" name="name" {...name} />
        <Input label="Weight" type="number" id="weight" name="weight" {...weight} />
        <Input label="Age" type="number" id="age" name="age" {...age} />

        <Input label="File" type="file" id="img" name="img" onChange={handleImgChange} />

        {loading ? (
          <Input type="submit" id="submit" name="submit" className="button" value="Loading..." disabled />
        ) : (
          <Input type="submit" id="submit" name="submit" className="button" value="Post your photo" />
        )}

        <Error error={fetchError} />
      </form>
      <div>{img.preview && <div className="preview" style={{ backgroundImage: `url('${img.preview}')` }}></div>}</div>
    </section>
  );
};

export default UserPhotoPost;

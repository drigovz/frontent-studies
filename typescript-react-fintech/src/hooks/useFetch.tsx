import { useEffect, useRef, useState } from 'react';
// recebemos dois parâmetros
// o primeiro é a url que é do tipo RequestInfo ou URL, ambos são tipos da interface do fetch
// e os options que são informações opcionais que também possuem a tipagem iguais a da interface do fetch
function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit | undefined,
): {
  data: T | null;
  loading: boolean;
  fetchError: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // estamos colocando o options dentro de um useRef
  // para 'ignorar' essa dependência e não precisar atualizar o hook toda a vez que
  // mudarmos o options
  const optionsRef = useRef(options);
  // passamos options novamente para o optionsRef porque com o useRef ele cria uma
  // referência estática, e se atualizarmos as opções queremos que o valor da constante
  // optionsRef esteja também atualizado com esses valores
  optionsRef.current = options;

  // toda vez que a url mudar, devemos realizar um novo fetch, por isso utilizamos
  // dentro de um useEffect
  useEffect(() => {
    // no JavaScript nós temos uma opção chamada AbortController que serve para
    // abortar uma requisição, e usaremos isso para cancelar as requisições que não forem necessárias
    // por exemplo, quando iniciamos uma página, porém o usuário já acessa outra página antes mesmo da anterior
    // terminar e carregar, dessa forma não é necessário seguir com a requisição anterior, e com isso
    // evitamos uma requisição desnecessária
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      // assim que iniciamos o efeito, para garantir novos dados, limpamos o
      // data e setamos o loading como false
      setData(null);
      setLoading(true);

      try {
        const response = await fetch(url, {
          // usamos o signal do AbortController para indicar que estamos querendo
          // controlar essa requisição com o AbortControler
          signal,
          ...optionsRef.current,
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        // aqui nós fizemos um cast da resposta que recebemos da api
        // para o tipo da interface que estamos utilizando, assim nós
        // forçamos uma tipagem da resposta da api
        const json = (await response.json()) as T;
        // nós vamos definir o valor para o data, apenas se a requisição não foi cancelada
        if (!signal.aborted) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        if (!signal.aborted && error instanceof Error) {
          setFetchError(error.message);
          setLoading(false);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    // ativamos a função na sequencia para que ela funcione
    fetchData();

    // aqui nós abortamos a requisição, caso ela não seja mais necessária
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, fetchError };
}

export default useFetch;

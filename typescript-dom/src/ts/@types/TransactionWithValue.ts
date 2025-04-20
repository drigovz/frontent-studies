import Transaction from "../interfaces/Transaction";

/**
 * criamos um novo tipo que implementa a interface Transaction
 * porém, cria uma interseção, adicionando nessa interface a propriedade `value`
 * que é do tipo number. Como a interface 'Transaction' já possui uma propriedade
 * 'value' porém com o seu tipo sendo 'number ou null', nós estamos criando um novo
 * tipo dessa interface, só que sobrescrevendo essa propriedade 'value' mudando o seu tipo
 */
export type TransactionWithValue = Transaction & {
  value: number;
};

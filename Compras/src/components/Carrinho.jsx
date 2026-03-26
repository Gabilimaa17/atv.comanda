import styles from "./Carrinho.module.css";

function Carrinho ({ itens }) {
  const valorTotal = itens.reduce((acc, item) => {
    return acc + (item.preco * item.quantidade);
  }, 0);
  
  return (
    <div className={styles.listaProdutos}>
       <h2>🛒 Resumo da Compra</h2>
         
        <div className={styles.listaProduto}>
      
        {itens.map((item) => {
          const subtotal = item.preco * item.quantidade;
          
          return (
            <div key={item.id} className={styles.listaProdutos}>
            <div className={styles.cardItem}>
                <img className={styles.fotoProduto} src={item.imagem} alt={item.nome} />
                  <h3>{item.nome}</h3>
                  <div>Quantidade: {item.quantidade}</div>
                  <div>Preco: R$ {item.preco.toFixed(2)}</div>
                  
          
              <br />
              <span> {subtotal.toFixed}</span>
        </div>
            </div>
          );
        })}
         <hr className={styles.linhaDivisoria} />

        <span >Total a Pagar: </span>
        <div className={styles.precoBox}>
        <span className={styles.valorDestaque}>R$ {valorTotal.toFixed(2)}</span>
      </div>
      </div>
      <div className={styles.itemLista}>

      </div>
      <div className={styles.totalDiv}>
        <div className={styles.botaoFinalizar}><span>Finalizar Compra </span> </div>
      </div>
    </div>
  );
}

export default Carrinho;
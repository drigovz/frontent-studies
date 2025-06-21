import summary from '../../assets/icons/resumo.svg';
import sails from '../../assets/icons/vendas.svg';
import webhooks from '../../assets/icons/webhooks.svg';
import settings from '../../assets/icons/configuracoes.svg';
import contact from '../../assets/icons/contato.svg';
import logout from '../../assets/icons/sair.svg';
import Logo from '../Logo';

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-three">
      <Logo title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="" />
          </span>
          <a href="#">Summary</a>
        </li>
        <li>
          <span>
            <img src={sails} alt="" />
          </span>
          <a href="#">Sails</a>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="#">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={settings} alt="" />
          </span>
          <a href="#">Sails</a>
        </li>
        <li>
          <span>
            <img src={contact} alt="" />
          </span>
          <a href="#">Contact</a>
        </li>
        <li>
          <span>
            <img src={logout} alt="" />
          </span>
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;

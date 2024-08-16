import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import { FormCustomer } from './component/form-customer';

const NewCustomer = () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer', label: 'Clientes' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];

  return (
    <Container>
      <div className="my-14">
        <NavMenu paths={paths} />
      </div>

      <section>
        <h1 className="mb-6">Dados Pessoais</h1>
      </section>
      <FormCustomer />
    </Container>
  );
};

export default NewCustomer;

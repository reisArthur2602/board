import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import { FormCustomer } from './components/form-customer';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

const NewCustomer = async () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer', label: 'Clientes' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];

  const session = await getServerSession(authOptions);
  const user_id = session?.user.id as string;

  return (
    <Container>
      <div className="my-14">
        <NavMenu paths={paths} />
      </div>

      <section>
        <h1 className="mb-6">Dados Pessoais</h1>
      </section>
      <FormCustomer userId={user_id} />
    </Container>
  );
};

export default NewCustomer;
